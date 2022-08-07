import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : "authSlice",
    initialState : {id : '', email: '', login : false, loading : false},
    reducers : {
        startLogin : state => { state = state.loading = true },
        finishLogin : (state, action) => {
            const { userId, email } = action.payload
            return (
                {
                    id : userId,
                    email,
                    login : true,
                    loading : false
                }
            )
        }
    }
}) 

export const { startLogin, finishLogin } = authSlice.actions
