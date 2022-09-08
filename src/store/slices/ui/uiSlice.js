import { createSlice } from "@reduxjs/toolkit"

export const uiSlice = createSlice({
    name : "ui",
    initialState : {
        menuItemSelected : ''
    },
    reducers : {
        setMenuItem : (state, action) => {
            state.menuItemSelected = action.payload
        }
    }
})

export const { setMenuItem } = uiSlice.actions

