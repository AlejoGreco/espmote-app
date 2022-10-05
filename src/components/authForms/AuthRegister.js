import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { registerUser, loginWithGoogle } from '../../store/slices/auth/thunks';
import { Link as RouterLink } from 'react-router-dom';
import WpTextField from '../WpTextField';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Stack,
    Container,
    Typography,
    useMediaQuery,
    Link,
    Alert,
    AlertTitle
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import Google from '../../assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthRegister = ({ ...others }) => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const error = useSelector(state => state.userAuth.error)
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))
    //const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(true)

    const handleSubmit = values => {
        dispatch(registerUser(values))
    }

    const handleClickGoogle = () => {
        dispatch(loginWithGoogle())
    }

    const initialValues = {
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    }

    const schema = Yup.object().shape({
        firstName : Yup.string().min(3, 'El nombre debe tener al menos 3 caracteres').max(64).required('El nombre es un campo obligatorio'),
        lastName : Yup.string().min(3, 'El apellido debe tener al menos 3 caracteres').max(64).required('El apellido es un campo obligatorio'),
        email : Yup.string().email('Ingrese un email valido').max(64).required('El email es un campo obligatorio'),
        password : Yup.string().min(6, 'La clave debe tener al menos 6 caracteres').max(64).required('La clave es un campo obligatorio')
    })

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <Button
                            disableElevation
                            fullWidth
                            onClick={handleClickGoogle}
                            size="large"
                            variant="outlined"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[100]
                            }}
                        >
                            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                            </Box>
                            Ingrese con Google
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `12px`
                            }}
                            disableRipple
                            disabled
                        >
                            O
                        </Button>

                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Registro con correo electronico</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Grid container spacing={matchDownSM ? 0 : 2}>
                        <Grid item xs={12} sm={6}>
                            <WpTextField
                                id="firstName"
                                name="firstName"
                                label="Nombre"
                                placeholder='Su nombre'
                                margin="normal"
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <WpTextField
                                id="lastName"
                                name="lastName"
                                label="Apellido"
                                placeholder='Su apellido'
                                margin="normal"
                                variant='outlined'
                            />
                        </Grid>
                    </Grid>
                    <WpTextField
                        id="email"
                        name="email"
                        label="Email"
                        placeholder='miCorreo@correo.com'
                        margin="normal"
                        variant='outlined'
                    />
                    <WpTextField
                        id="password"
                        name="password"
                        label="Clave"
                        type="password"
                        margin="normal"
                        variant='outlined'
                    />
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={(event) => setChecked(event.target.checked)}
                                    name="checked"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Link component={RouterLink} 
                            color={theme.palette.secondary.main} 
                            to='/resetpass' variant="body2"
                        >
                            Olvido su clave?
                        </Link>
                    </Stack>
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
                    <Box sx={{ mt: 2 }}>
                        <Button
                            disableElevation
                            disabled={false}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            Ingresar
                        </Button>
                    </Box>
                </Form>
            </Formik>
        </>
    );
};

export default AuthRegister;
