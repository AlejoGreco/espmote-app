import { createAsyncThunk } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../firebase"



export const fetchRegisterUser = createAsyncThunk('auth/registerNewUser', async payload => {
    const {email, password} = payload
    const result = await createUserWithEmailAndPassword(auth, email, password)
    return result
})

export const fetchLoginUser = createAsyncThunk('auth/loginUser', async payload => {
    const {email, password} = payload
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result
})