import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@mui/material'
import Login from './Login'
import Register from './Register'
import ResetPass from './ResetPass'

const Welcome = () => {
    const [form, setForm] = useState('login')

    const handleChangeForm = form => {
        setForm(form)
    }

    const renderForm = form => {
        switch (form) {
            case 'login':
                return <Login handleChangeForm={handleChangeForm}/>
            case 'register':
                return <Register handleChangeForm={handleChangeForm}/>
            case 'resetPass':
                return <ResetPass handleChangeForm={handleChangeForm}/>
            default:
                return <Login handleChangeForm={handleChangeForm}/>
        }
    }

    return (
        <Grid container>
            <Grid item 
                xs={12} sm={12} md={8} lg={6} xl={6}
                justifyContent='center'
                alignContent='center'
            >
                <Button variant='contained'>
                    <Link to='/home'>GET STARTED!</Link>
                </Button>
            </Grid>
            <Grid item 
                xs={12} sm={12} md={4} lg={6} xl={6}
                justifyContent='center'
            >
                {
                    renderForm(form)
                }
            </Grid>
        </Grid>
    )
}

export default Welcome