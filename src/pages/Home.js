import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { fetchLogoutUser } from '../store/slices/auth/thunks'

const Home = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(fetchLogoutUser())
  }

  return (
    <div>{<Button onClick={handleClick}>Logout</Button>}</div>
  )
}

export default Home