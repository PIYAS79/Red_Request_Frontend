import baseApi from "./baseApi";




const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // create user (signup) api
        createUser: builder.mutation({
            query: (data) => ({
                url: '/user/create',
                method: 'POST',
                body: data
            }),
            transformResponse: (res: any) => {
                return res.data
            }
        }),
        // login user api
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            }),
            transformResponse: (res: any) => {
                return res.data
            }
        })
    })
})


export const { useCreateUserMutation,useLoginUserMutation } = authApi;