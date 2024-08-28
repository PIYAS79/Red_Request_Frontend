import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, BaseQueryApi, DefinitionType } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { toast } from "sonner";
import { removeUser, setUser } from "../features/auth.slice";



const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5022/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', token);
        }
        return headers;
    }

})

const customBaseQuery: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
    let res = await baseQuery(args, api, extraOptions) as any;
    // if status code is 404
    if (res?.error?.status === 404) {
        toast.error(res?.error?.data?.Error_Title, { position: 'bottom-right' })
    }
    // duplicate key error 
    if(res?.error?.status == 409){
        toast.error(res?.error?.data?.Error_Title, { position: 'bottom-right' })
    }

    if (res?.error?.status === 401) {
        const result = await fetch('https://code-note-backend.vercel.app/api/v1/auth/refresh', {
            method: "GET",
            credentials: 'include',
        });
        const data = await result.json();
        if (data.data.Access_Token) {
            const user = (api.getState() as RootState).auth.user;
            const _id = (api.getState() as RootState).auth._id;
            const me = (api.getState() as RootState).auth.me;
            api.dispatch(setUser({ user, token: data.data.Access_Token, _id, me }));
            res = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(removeUser());
        }
    }
    return res;
}


const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: customBaseQuery,
    tagTypes: [],
    endpoints: () => ({})
})

export default baseApi;