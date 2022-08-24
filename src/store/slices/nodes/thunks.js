import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, set } from "firebase/database";
import { database } from "../../../firebase";

export const createNewNode = createAsyncThunk(
    'nodes/createNewNode',
    async ({nodeId, userId}) => {
        const obj = {
            userId,
            latest: {
                co2 : "",
                hum : "",
                temp : ""
            }
        }
        return await set(ref(database, `nodes/${nodeId}`), obj)
    }
)