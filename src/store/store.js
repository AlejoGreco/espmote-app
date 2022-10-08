import { configureStore } from "@reduxjs/toolkit"
import { alarmsSlice } from "./slices/alarms/alarmsSlice"
import { authSlice } from './slices/auth'
import { nodeDetailsSlice } from "./slices/nodeDetails"
import { nodesSlice } from "./slices/nodes"
import { uiSlice } from "./slices/ui"


export const store = configureStore({
    reducer : {
        userAuth : authSlice.reducer,
        nodes : nodesSlice.reducer,
        nodeDetails: nodeDetailsSlice.reducer,
        ui : uiSlice.reducer,
        alarms : alarmsSlice.reducer
    }
})