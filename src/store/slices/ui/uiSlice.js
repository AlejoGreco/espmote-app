import { createSlice } from "@reduxjs/toolkit"

export const uiSlice = createSlice({
    name : "ui",
    initialState : {
        menuItemSelected : 'dashboard',
        drawerOpened : true
    },
    reducers : {
        setMenuItem : (state, action) => {
            state.menuItemSelected = action.payload
        },
        setDrawerVisibility : (state, action) => {
            state.drawerOpened = action.payload 
        }

    }
})

export const { setMenuItem, setDrawerVisibility } = uiSlice.actions

