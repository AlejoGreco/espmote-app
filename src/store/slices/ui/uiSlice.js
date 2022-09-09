import { createSlice } from "@reduxjs/toolkit"

export const uiSlice = createSlice({
    name : "ui",
    initialState : {
        menuItemSelected : '',
        drawerOpened : true
    },
    reducers : {
        setMenuItem : (state, action) => {
            state.menuItemSelected = action.payload
        },
        setDrawerVisibility : (state) => {
            state.drawerOpened = !state.drawerOpened 
        }

    }
})

export const { setMenuItem, setDrawerVisibility } = uiSlice.actions

