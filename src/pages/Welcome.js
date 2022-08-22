import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Welcome = () => {
  return (
    <Button variant='contained'>
      <Link to='/home'>GET STARTED!</Link>
    </Button>
  )
}

export default Welcome