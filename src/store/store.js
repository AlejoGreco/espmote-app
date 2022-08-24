import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './slices/auth'
import { nodesSlice } from "./slices/nodes";

export const store = configureStore({
    reducer : {
        userAuth : authSlice.reducer,
        nodes : nodesSlice.reducer
    }
})