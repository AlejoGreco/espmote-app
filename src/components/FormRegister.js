import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { startLogin, finishLogin } from '../store/slices/auth';

const FormRegister = () => {

    const dispath = useDispatch()
    const navigate = useNavigate()
    
    /* ************************************************************** */
    /* Refactor futuro hacer validacion con redux forms */
    const [userLog, setUserLog] = useState({email : '', password : ''})
    const [error, setError] = useState('')

    const onChangeHandler = e => {
        setUserLog({...userLog, [e.target.name] : e.target.value})
    }
    /* ************************************************************** */

    const onSubmitHandler = e => {
        e.preventDefault()
        dispath(startLogin())
        createUserWithEmailAndPassword(auth, userLog.email, userLog.password)
            .then(resp => {
                setError('')
                const { uid, email } = resp.user
                dispath(finishLogin({ userId: uid, email }))
                navigate('/home')
            })
            .catch(e => { 
                setError(e.message)
                console.log(e)
            })
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <Grid container direction='column' justifyContent='center' alignContent='center'>
                {
                    error && <Grid item><p>{error}</p></Grid>
                }
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