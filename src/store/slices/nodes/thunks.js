import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, set } from "firebase/database";
import { database } from "../../../firebase";

export const addNewNode = createAsyncThunk(
    'nodes/addNewNode',
    async ({node, index, userId}) => {
        const obj = {
            [index] : {
                nodeId : node.nodeId,
                name : node.name
            }
        }
        
        return await set(ref(database, `users/${userId}/nodes`), obj)
    }
)