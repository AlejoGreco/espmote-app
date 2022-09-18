import { createSlice } from "@reduxjs/toolkit"
import { addNewNode, getUserNodeIds, deleteNode } from "./thunks"

export const nodesSlice = createSlice({
    name: 'nodes',
    initialState: {
        loading : true,
        nodesId : [],
        nodesData : [],
        error : null,
        feedback : null
    },
    reducers: {
        setNodeData : (state, action) => {
            const index = state.nodesData.findIndex(n => n.id === action.payload.id )
            if(index === -1){ 
                state.nodesData.push(action.payload) 
            }
            else{ 
                state.nodesData[index] = action.payload 
            }

            if(state.nodesData.length === state.nodesId.length)
                state.loading = false
        },
        setErrorNodes : (state, action) => {
            state.error = action.payload
            state.feedback = null
        }
    },
    extraReducers : builder => {

        // Reducers de nuevos nodos
        builder.addCase(addNewNode.pending, state => {
            state.loading = true
            state.error = null
            state.feedback = null
        })

        builder.addCase(addNewNode.fulfilled, (state, action) => {
            state.loading = false
            state.nodesId.push(action.meta.arg.node)
            state.feedback = { message : 'El nodo ha sido creado',  target: 'createNodeForm'}
        })

        builder.addCase(addNewNode.rejected, (state, action) => {
            const { error } = action
            state.loading = false
            state.error = {code : error.code, message : error.message, target: 'createNodeForm'}
        })

        //////////////////////////////////////////////////////////////////////

        // Reducers de borrado de nodos
        builder.addCase(deleteNode.pending, state => {
            state.loading = true
            state.error = null
            state.feedback = null
        })

        builder.addCase(deleteNode.fulfilled, (state, action) => {
            state.loading = false
            state.nodesId = state.nodesId.filter(n => n.nodeId !== action.meta.arg.nodeId)
            state.nodesData = state.nodesData.filter(n => n.id !== action.meta.arg.nodeId)
            state.feedback = { message : 'El nodo ha sido eliminado', target: 'snack'}
        })

        builder.addCase(deleteNode.rejected, (state, action) => {
            const { error } = action
            state.loading = false
            state.error = {code : error.code, message : error.message, target: 'snack'}
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
            state.nodesId = respose
        })

        builder.addCase(getUserNodeIds.rejected, (state, action) => {
            const { error } = action
            state.loading = false
            state.error = {code : error.message, message : error.stack, target: 'main'}
        })

    }
})


export const { setNodeData, setErrorNodes } = nodesSlice.actions