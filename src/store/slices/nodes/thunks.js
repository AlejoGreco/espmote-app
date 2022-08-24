import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNewNode = createAsyncThunk(
    'nodes/createNewNode',
    async nodeId => {
        //peticion a firebase
    }
)