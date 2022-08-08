import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { logoutFb } from '../store/slices/auth/thunk'

const Home = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logoutFb())
  }

  return (
    <div>{<Button onClick={handleClick}>Logout</Button>}</div>
  )
}

export default Home