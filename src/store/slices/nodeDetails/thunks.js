import { createAsyncThunk } from "@reduxjs/toolkit"
import { get, ref, query, startAt } from "firebase/database"
import { getTimeForQuery } from "../../../utils"
import { database } from "../../../firebase"

export const getNodeHistory = createAsyncThunk(
    'nodeDetails/getNodeHistory',
    async params => {
        const { nodeId, period } = params
        const snapshot = await get(query(ref(database, `nodos_hist/${nodeId}`), startAt(null, getTimeForQuery(period))))
        if(snapshot.exists()){
            return {nodeId, period, history: {data: Object.values(snapshot.val()), time: Object.keys(snapshot.val())}}
        }
        return { nodeId, period, history: {data: [], time: []} }
    }
)