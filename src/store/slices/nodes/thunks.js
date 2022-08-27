import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get, ref, set } from "firebase/database";
import { database } from "../../../firebase";

export const addNewNode = createAsyncThunk(
    'nodes/addNewNode',
    async ({node, index, userId}) => {
        const obj = {
            nodeId : node.nodeId,
            name : node.name
        }
        
        return await set(ref(database, `users/${userId}/nodes/${index}`), obj)
    }
)

export const getUserNodeIds = createAsyncThunk(
    'nodes/getUserNodeIds',
    async userId => {
        const snapshot = await get(child(ref(database), `users/${userId}/nodes`))
        if(snapshot.exists()){
            return snapshot.val()
        }
        return []
    }
)