import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { setLogin, setLogout } from '../store/slices/auth';

export const useUserAuth = () => {
    const navigate = useNavigate()
    const userId = useSelector(state => state.userAuth.id)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
        if(user){
            if(user.uid !== userId){
                dispatch(setLogin({userId : user.uid, email : user.email}))
                navigate('/home')
            }
        }
        else
            dispatch(setLogout())
        })
    }, [dispatch, navigate, userId])
}