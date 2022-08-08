import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : "authSlice",
    initialState : {
        id : '', 
        email: '', 
        login : false, 
        loading : false
    },
    reducers : {
        startLoad : state => { state = state.loading = true },
        setLogin : (state, action) => {
            const { userId, email } = action.payload
            return (
                {
                    id : userId,
                    email,
                    login : true,
                    loading : false
                }
            )
        },
        setLogout : state => {
            state.id = ''
            state.email = ''
            state.login = false 
            state.loading = false
        }
    }
}) 

export const { startLoad, setLogin, setLogout } = authSlice.actions
