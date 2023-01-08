import { createSlice } from "@reduxjs/toolkit"
import { getNodeHistory } from "./thunks"

export const nodeDetailsSlice = createSlice({
    name: 'nodeDetails',
    initialState: {
        loading : true,
        nodeHistory: {},
        error : null,
    },
    reducers: {
        setHistoryLoading: state => {
            state.loading = true
            state.error = null
        },
        setHistoryLoaded: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getNodeHistory.pending, state => {
            state.loading = true
            state.error = null
        })

        builder.addCase(getNodeHistory.fulfilled, (state, action) => {
            console.log(action)
            state.nodeHistory = {
                ...state.nodeHistory, 
                [action.payload.nodeId]: {
                    ...state.nodeHistory[action.payload.nodeId],
                    [action.payload.period]: action.payload.history
                }
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

export const { setHistoryLoading, setHistoryLoaded } = nodeDetailsSlice.actions