import React from 'react'
import { Avatar, Box, Button, Container, Link, Typography, Alert, AlertTitle } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { resetPass } from '../store/slices/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import WpTextField from './WpTextField';

const FormRstPass = () => {
    const dispatch = useDispatch()
    const {error, feedback} = useSelector(state => state.userAuth)

    const theme = createTheme()

    const initialValues = {
        email : ''
    }

    const schema = Yup.object().shape({
        email : Yup.string().email('Ingrese un email valido').required('El email es un campo obligatorio'),
    })

    const handleSubmit = values => {
        dispatch(resetPass(values))
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Restablecer contraseña
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Box sx={{ mt: 1 }}>
                                <WpTextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    placeholder='miCorreo@correo.com'
                                    margin="normal"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Enviar correo
                                </Button>
                            </Box>
                        </Form> 
                    </Formik>
                    {
                        error && 
                        (
                            <Container disableGutters={true} sx={{my: 4}}>
                                <Alert severity="error">
                                    <AlertTitle>{`${error.code}`}</AlertTitle>
                                    {`${error.message}`}
                                </Alert>
                            </Container>
                        )
                    }
                    {
                        feedback && 
                        (
                            <Container disableGutters={true} sx={{my: 4}}>
                                <Alert severity="info">
                                    <AlertTitle>{`${feedback.message}`}</AlertTitle>
                                    <Typography>
                                        Una vez haya cambiado su clave<br/>
                                        <Link component={RouterLink} to='/login'><strong>Ingrese aqui!</strong></Link>
                                    </Typography>
                                </Alert>
                            </Container>
                        )
                    }
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default FormRstPass