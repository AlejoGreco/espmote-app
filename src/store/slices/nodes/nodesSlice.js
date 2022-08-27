import { createSlice } from "@reduxjs/toolkit"
import { addNewNode, getUserNodeIds } from "./thunks"

export const nodesSlice = createSlice({
    name: 'nodes',
    initialState: {
        loading : true,
        nodesId : [],
        nodeData : [],
        error : null,
        feedback : null
    },
    reducers: {},
    extraReducers : builder => {

        // Reducers de nuevos nodos
        builder.addCase(addNewNode.pending, state => {
            state.loading = true
            state.error = null
            state.feedback = null
        })

        builder.addCase(addNewNode.fulfilled, (state, action) => {
            state.loading = false
            state.nodesId.push(action.meta.arg.node.nodeId)
            state.feedback = { message : 'El nodo ha sido creado'}
        })

        builder.addCase(addNewNode.rejected, (state, action) => {
            const { error } = action
            state.loading = false
            state.error = {code : error.code, message : error.message}
        })

        //////////////////////////////////////////////////////////////////////

        // Reducers obtencion de nodos del usuario
        builder.addCase(getUserNodeIds.pending, state => {
            state.loading = true
            state.error = null
            state.feedback = null
        })

        builder.addCase(getUserNodeIds.fulfilled, (state, action) => {
            const respose = action.payload
            state.loading = false
            state.nodesId = respose
        })

        builder.addCase(getUserNodeIds.rejected, (state, action) => {
            const { error } = action
            state.loading = false
            state.error = {code : error.message, message : error.stack}
        })

    }
})


//export const { } = nodesSlice.actions