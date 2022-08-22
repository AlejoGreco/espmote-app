import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { logoutUser } from '../store/slices/auth/thunks'
import PageFrame from '../components/PageFrame'

const Home = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logoutUser())
  }

  return (
    <PageFrame>
      hola
      <Button onClick={handleClick}>Logout</Button>
    </PageFrame>
  )
}

export default Home