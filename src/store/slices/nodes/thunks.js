import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get, ref, set, remove } from "firebase/database";
import { database } from "../../../firebase";

export const addNewNode = createAsyncThunk(
    'nodes/addNewNode',
    async ({node, userId}) => {
        const obj = {
            nodeId : node.nodeId,
            name : node.name
        }
        const newRef = ref(database, `users/${userId}/nodes/${node.nodeId}`)
        return await set(newRef, obj)
    }
)

export const deleteNode = createAsyncThunk(
    'nodes/deleteNode',
    async ({nodeId, userId}) => {
        const newRef = ref(database, `users/${userId}/nodes/${nodeId}`)
        return await remove(newRef)
    }
)

export const getUserNodeIds = createAsyncThunk(
    'nodes/getUserNodeIds',
    async userId => {
        const snapshot = await get(child(ref(database), `users/${userId}/nodes`))
        if(snapshot.exists()){
            return Object.values(snapshot.val())
            //const keys = Object.keys(snapshot.val())
            //return Object.values(snapshot.val()).map( (item, i) => ({...item, keydb : keys[i]}))
        }
        return []
    }
)