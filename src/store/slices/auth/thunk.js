import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { setLogout } from "./authSlice";

export const logoutFb = () => {
    return async dispatch => {
        return signOut(auth)
            .then(() => {
                dispatch(setLogout())
            })
            .catch(e => console.log(e.message))
    }
}
