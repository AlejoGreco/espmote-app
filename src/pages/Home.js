import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'

const Home = () => {
  const dispatch = useDispatch()

  const handleClick = () => { }

  return (
    <div>{<Button onClick={handleClick}>Logout</Button>}</div>
  )
}

export default Home