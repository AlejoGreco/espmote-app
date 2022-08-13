import { createAsyncThunk } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../firebase"



export const fetchRegisterUser = createAsyncThunk('auth/registeNewUser', async (payload) => {
    const {email, password} = payload
    const result = await createUserWithEmailAndPassword(auth, email, password)
    return result
})