import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : "authSlice",
    initialState : {},
    reducers : {
        getUserAuth : (state, action) => state
    }
}) 

export const { getUserAuth } = authSlice.actions
