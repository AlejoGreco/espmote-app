import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { createUserFb } from '../store/slices/auth'
import { useDispatch } from 'react-redux'

const FormRegister = () => {

    const dispath = useDispatch()
    
    /* ************************************************************** */
    /* Refactor futuro hacer validacion con redux forms */
    const [userLog, setUserLog] = useState({email : '', password : ''})

    const onChangeHandler = e => {
        setUserLog({...userLog, [e.target.name] : e.target.value})
    }
    /* ************************************************************** */

    const onSubmitHandler = e => {
        e.preventDefault()
        dispath(createUserFb(userLog))
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <Grid container direction='column' justifyContent='center' alignContent='center'>
                <Grid item>
                    <TextField 
                        type='email' 
                        label='Email' 
                        variant='outlined'
                        name='email'
                        id='email'
                        value={userLog.email} 
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item>
                    <TextField 
                        type='password' 
                        label='Password' 
                        variant='outlined' 
                        name='password'
                        id='password'
                        value={userLog.password}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item>
                    <Button variant='outlined' type='submit'>Register</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default FormRegister