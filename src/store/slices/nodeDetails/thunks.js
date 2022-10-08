import { createAsyncThunk } from "@reduxjs/toolkit"
import { child, get, ref } from "firebase/database"
import { database } from "../../../firebase"

export const getNodeHistory = createAsyncThunk(
    'nodeDetails/getNodeHistory',
    async nodeId => {
        const snapshot = await get(child(ref(database), `nodos_hist/${nodeId}`))
        if(snapshot.exists()){
            console.log(Object.values(snapshot.val()))
            console.log(Object.keys(snapshot.val()))
            return {nodeId, hist: snapshot.val()}
        }
    }
)