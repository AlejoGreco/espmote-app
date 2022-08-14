import React from 'react'
import { Avatar, Checkbox, Box, Button, Container, FormControlLabel, Grid, Link, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { loginUser } from '../store/slices/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import WpTextField from './WpTextField';


const FormLogin = () => {

    const dispatch = useDispatch()
    const error = useSelector(state => state.userAuth.error)

    const theme = createTheme()

    const initialValues = {
        email : '',
        password : ''
    }

    const schema = Yup.object().shape({
        email : Yup.string().email('Ingrese un email valido').required('El email es un campo obligatorio'),
        password : Yup.string().min(6, 'La clave debe tener al menos 6 caracteres').required('La clave es un campo obligatorio')
    })

    const handleSubmit = values => {
        dispatch(loginUser(values))
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
                    {
                        error && 
                        (
                            <Container sx={{
                                textAlign : 'center',
                                border : 2,
                                borderColor : 'error.main',
                                borderRadius : 2,
                                bgcolor : '#ffcdd2',
                                my: 4, 
                                py:2
                            }}
                            >
                                <Typography sx={{ color : 'error.main' }}>{`Ha ocurrido un error`}</Typography>
                                <Typography sx={{ color : 'error.main' }}>{`${error.code}`}</Typography>
                            </Container>
                        )
                    }
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default FormLogin