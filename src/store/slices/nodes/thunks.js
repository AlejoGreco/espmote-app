import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get, ref, set, push } from "firebase/database";
import { database } from "../../../firebase";

export const addNewNode = createAsyncThunk(
    'nodes/addNewNode',
    async ({node, userId}) => {
        const obj = {
            nodeId : node.nodeId,
            name : node.name
        }
        const newRef = push(ref(database, `users/${userId}/nodes/`))
        return await set(newRef, obj)
    }
)

export const getUserNodeIds = createAsyncThunk(
    'nodes/getUserNodeIds',
    async userId => {
        const snapshot = await get(child(ref(database), `users/${userId}/nodes`))
        if(snapshot.exists()){
            const keys = Object.keys(snapshot.val())
            return Object.values(snapshot.val()).map( (item, i) => ({...item, keydb : keys[i]}))
        }
        return []
    }
)