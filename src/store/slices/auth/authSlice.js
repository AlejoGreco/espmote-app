import { createSlice } from "@reduxjs/toolkit";
import { fetchRegisterUser, fetchLoginUser } from "./thunks";

export const authSlice = createSlice({
    name : "auth",
    initialState : {
        id : '', 
        email : '', 
        login : false, 
        loading : false,
        error : null
    },
    reducers : { },
    extraReducers : builder => {

        // Refucers for register users

        builder.addCase(fetchRegisterUser.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchRegisterUser.fulfilled, (state, action) => {
            const user = action.payload.user
            state.id = user.uid
            state.email = user.email
            state.login = true
            state.loading = false
            state.error = null
        })
        builder.addCase(fetchRegisterUser.rejected, (state, action) => {
            const error = action.error
            state.id = ''
            state.email = ''
            state.login = false
            state.loading = false
            state.error = {code : error.code, messaje : error.message}
        })

        // Reducers for login user

        builder.addCase(fetchLoginUser.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
            const user = action.payload.user
            state.id = user.uid
            state.email = user.email
            state.login = true
            state.loading = false
            state.error = null
        })
        builder.addCase(fetchLoginUser.rejected, (state, action) => {
            const error = action.error
            state.id = ''
            state.email = ''
            state.login = false
            state.loading = false
            state.error = {code : error.code, messaje : error.message}
        })

    }
})

