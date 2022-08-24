import { createSlice } from "@reduxjs/toolkit"
import { createNewNode } from "./thunks"

export const nodesSlice = createSlice({
    name: 'nodes',
    initialState: {
        loading : true,
        nodes : [],
        error : null,
        feedback : null
    },
    reducers: {},
    extraReducers : builder => {

        // Reducers de creacion de nuevos nodos
        builder.addCase(createNewNode.pending, state => {
            state.loading = true
            state.error = null
            state.feedback = null
        })

        builder.addCase(createNewNode.fulfilled, (state, action) => {
            state.loading = false
            state.nodes.push(action.payload)
            state.feedback = { message : 'Nodo creado con exito'}
        })

        builder.addCase(createNewNode.rejected, (state, action) => {
            const { error } = action
            state.loading = false
            state.error = {code : error.code, message : error.message}
        })

        
    }
})


//export const { } = nodesSlice.actions