import { createSlice } from "@reduxjs/toolkit";
import { fetchRegisterUser } from "./thunks";

export const authSlice = createSlice({
    name : "auth",
    initialState : {
        id : '', 
        email : '', 
        login : false, 
        loading : false,
        error : ''
    },
    reducers : { },
    extraReducers : builder => {
        builder.addCase(fetchRegisterUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchRegisterUser.fulfilled, (state, action) => {
            const user = action.payload.user
            console.log(user)
            state.id = user.uid
            state.email = user.email
            state.login = true
            state.loading = false
        })
        builder.addCase(fetchRegisterUser.rejected, (state, action) => {
            const error = action.error
            state.id = ''
            state.email = ''
            state.login = false
            state.loading = false
            state.error = `Error code: ${error.code} - ${error.message}`
        })
    }
})

