import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'

const Form = ({formType}) => {

    /* ************************************************************** */
    /* Refactor futuro hacer validacion con redux forms */
    const [userLog, setUserLog] = useState({email : '', password : ''})

    const onChangeHandler = e => {
        setUserLog({...userLog, [e.target.name] : e.target.value})
    }
    /* ************************************************************** */

    const onSubmitHandler = e => {
        e.preventDefault()
        
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
                    <Button variant='outlined' type='submit'>{formType === 'login' ? 'Login' : 'Register'}</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Form