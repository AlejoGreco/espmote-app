import { createAsyncThunk } from "@reduxjs/toolkit"
import { child, get, ref } from "firebase/database"
import { database } from "../../../firebase"

export const getNodeHistory = createAsyncThunk(
    'nodeDetails/getNodeHistory',
    async params => {
        const { nodeId, period } = params
        const snapshot = await get(child(ref(database), `nodos_hist/${nodeId}`))
        console.log({data: snapshot.val(), time: snapshot.key}, params)
        return {nodeId, period, history: {data: Object.values(snapshot.val()), time: Object.keys(snapshot.val())}}
    }
)