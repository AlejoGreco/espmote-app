import { startLogin, finishLogin } from "./authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase'

export const createUserFb = payload => {

    const { email, password } = payload

    return async dispath => {
        dispath(startLogin())
        return createUserWithEmailAndPassword(auth, email, password)
            .then( resp => { 
                const { uid, email } = resp.user 
                dispath(finishLogin({ userId: uid, email }))
            })
        
    }
}

export const logUserFb = payload => {
    const { email, password } = payload
    return async dispatch => {
        
    }
}
