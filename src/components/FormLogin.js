import React from 'react'
import { Avatar, Checkbox, Box, Button, Container, FormControlLabel, Grid, Link, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { fetchLoginUser } from '../store/slices/auth/thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import WpTextField from './WpTextField';


const FormLogin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const theme = createTheme()

    const initialValues = {
        email : '',
        password : ''
    }

    const schema = Yup.object().shape({
        email : Yup.string().email('Ingrese un email valido').required('El email es un campo obligatorio'),
        password : Yup.string().min(6, 'La clave debe tener al menos 6 caracteres').required('La clave es un campo obligatorio')
    })

    const handleSubmit = (values, { resetForm }) => {
        dispatch(fetchLoginUser(values))
        resetForm()
        navigate('/home')
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
                        Iniciar sesion
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
                                    autoFocus
                                />
                                <WpTextField
                                    id="password"
                                    name="password"
                                    label="Clave"
                                    type="password"
                                    margin="normal"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Ingresar
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Olvido su clave?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"No tienes una cuenta? Registrate!"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Form> 
                    </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default FormLogin