import { createSlice } from "@reduxjs/toolkit"
import { addNewNode, getUserNodeIds } from "./thunks"

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
        setLoaded : state => {
            state.loading = false
        },
        setListener : state => {
            state.loading = true
            state.error = null
        },
        setNodeData : (state, action) => {
            console.log(action.payload)
            const index = state.nodesData.findIndex(n => n.id === action.payload.id )
            if(index === -1){ 
                state.nodesData.push(action.payload) 
            }
            else{ 
                state.nodesData[index] = action.payload 
            }
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


export const { setListener, setNodeData, setLoaded } = nodesSlice.actions