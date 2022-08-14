import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({children}) => {
    const { login, loading } = useSelector(state => state.userAuth)

    if(loading)
        return <h1>Cargando...</h1>
    if(login)
        return <>{children}</>
        
    return <Navigate to='/login' />
}

export default ProtectRoute