import { My_Profile_Data_Type, Token_Decode_User_Type } from "../../Global/User_Related_Types"
import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';



type initialState_Auth_Type = {
    user: Token_Decode_User_Type | null,
    token: string | null,
    _id: string | null,
    me: My_Profile_Data_Type | null
}

const initialState: initialState_Auth_Type = {
    user: null,
    token: null,
    _id: null,
    me: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<initialState_Auth_Type>) => {
            const { _id, user, token, me } = action.payload;
            state._id = _id;
            state.user = user,
                state.token = token,
                state.me = me
        },
        removeUser: (state) => {
            state._id = null;
            state.me = null;
            state.token = null;
            state.user = null;
        }
    }
})


export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;