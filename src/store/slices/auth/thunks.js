import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut,
    GoogleAuthProvider,
    sendPasswordResetEmail
} from "firebase/auth"
import { auth } from "../../../firebase"
import { setAuthError, setFeedbackMsg, setLoading } from "./authSlice"


/* Ejemplo de uso de createAsyncThunk
* export const fetchRegisterUser = createAsyncThunk('auth/registerNewUser', async payload => {
*     const {email, password} = payload
*     const result = await createUserWithEmailAndPassword(auth, email, password)
*     return result
* })
*/

export const registerUser = payload => async dispatch => {
    const {email, password} = payload
    try{
        dispatch(setLoading())
        await createUserWithEmailAndPassword(auth, email, password)
    }
    catch (e){
        dispatch(setAuthError({code : e.code, message : e.message}))
    }
    
}

export const loginUser = payload => {
    return async dispatch => {
        const {email, password} = payload
        try{
            dispatch(setLoading())
            await signInWithEmailAndPassword(auth, email, password)
        }
        catch (e){
            dispatch(setAuthError({code : e.code, message : e.message}))
        }
    }
}

export const loginWithGoogle = () => {
    return async dispatch => {
        try{
            dispatch(setLoading())
            const googleProvider = new GoogleAuthProvider() 
            await signInWithPopup(auth, googleProvider)
        }
        catch (e){
            dispatch(setAuthError({code : e.code, message : e.message}))
        }
    }
}

export const resetPass = payload => async dispatch => {
    const { email } = payload
    try{
        dispatch(setLoading())
        await sendPasswordResetEmail(auth, email)
        dispatch(setFeedbackMsg({message : 'Correo de cambio de clave enviado'}))
    }
    catch (e){
        dispatch(setAuthError({code : e.code, message : e.message}))
    }
    
}

export const logoutUser = () => async dispatch => {
    try{
        dispatch(setLoading())
        await signOut(auth)
    }
    catch (e){
        dispatch(setAuthError({code : e.code, message : e.message}))
    }
    
}
