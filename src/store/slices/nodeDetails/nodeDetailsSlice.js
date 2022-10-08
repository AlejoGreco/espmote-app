import { createSlice } from "@reduxjs/toolkit"
import { getNodeHistory } from "./thunks"

export const nodeDetailsSlice = createSlice({
    name: 'nodeDetails',
    initialState: {
        loading : true,
        nodeHistoryData: {},
        nodeHistoryTime: {},
        error : null,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getNodeHistory.pending, state => {
            state.loading = true
            state.error = null
        })

        builder.addCase(getNodeHistory.fulfilled, (state, action) => {
            if(action.payload.exists){
                state.nodeHistoryData = {...state.nodeHistoryData, [action.payload.nodeId]: Object.values(action.payload.hist)}
                state.nodeHistoryTime = {...state.nodeHistoryTime, [action.payload.nodeId]: Object.keys(action.payload.hist)}
            }
            state.error = null
            state.loading = false
        })

        builder.addCase(getNodeHistory.rejected, (state, action) => {
            const { error } = action
            state.loading = false
            state.error = {code : error.code, message : error.message, target: 'snack'}
        })
    }
})