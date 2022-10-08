import { createSlice } from "@reduxjs/toolkit"

export const nodeDetailsSlice = createSlice({
    name: 'nodeDetails',
    initialState: {
        loading : true,
        nodeHistoryData: [],
        error : null,
    },
    reducers: {},
    extraReducers: builder => {

    }
})