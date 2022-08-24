import { createSlice } from "@reduxjs/toolkit"
import { addNewNode } from "./thunks"

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

        // Reducers de nuevos nodos
        builder.addCase(addNewNode.pending, state => {
            state.loading = true
            state.error = null
            state.feedback = null
        })

        builder.addCase(addNewNode.fulfilled, (state, action) => {
            console.log(action)
            state.loading = false
            state.nodes.push(action.payload)
            state.feedback = { message : 'El nodo ha sido creado'}
        })

        builder.addCase(addNewNode.rejected, (state, action) => {
            const { error } = action
            state.loading = false
            state.error = {code : error.code, message : error.message}
        })


    }
})


//export const { } = nodesSlice.actions