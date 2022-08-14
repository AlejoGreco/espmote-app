import React from 'react'
import { Avatar, Checkbox, Box, Button, Container, FormControlLabel, Grid, Link, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/slices/auth/thunks';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import WpTextField from './WpTextField';


const FormRegister = () => {

    const dispatch = useDispatch()
    const error = useSelector(state => state.userAuth.error)
    const theme = createTheme()

    const initialValues = {
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    }

    const schema = Yup.object().shape({
        firstName : Yup.string().min(3, 'El nombre debe tener al menos 3 caracteres').required('El nombre es un campo obligatorio'),
        lastName : Yup.string().min(3, 'El apellido debe tener al menos 3 caracteres').required('El apellido es un campo obligatorio'),
        email : Yup.string().email('Ingrese un email valido').required('El email es un campo obligatorio'),
        password : Yup.string().min(6, 'La clave debe tener al menos 6 caracteres').required('La clave es un campo obligatorio')
    })

    const handleSubmit = (values) => {
        dispatch(registerUser(values))
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
                    Crea tu cuenta
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <WpTextField
                                    id="firstName"
                                    name="firstName"
                                    label="Nombre"
                                    placeholder='Guillermo'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <WpTextField
                                    id="lastName"
                                    name="lastName"
                                    label="Apellido"
                                    placeholder='Passer'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <WpTextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    placeholder='miCorreo@correo.com'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <WpTextField
                                    id="password"
                                    name="password"
                                    label="Clave"
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Deseo recibir novedades del servicio en mi correo electronico."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Registrarse
                        </Button>
                    </Form>
                </Formik>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Ya tiene una cuenta? Ingrese
                        </Link>
                    </Grid>
                </Grid>  
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

export default FormRegister