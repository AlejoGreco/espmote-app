import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loginUser, loginWithGoogle } from '../../store/slices/auth/thunks';
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
    Alert,
    AlertTitle
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import Google from '../../assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = ({ handleChangeForm, ...others }) => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const error = useSelector(state => state.userAuth.error)
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))
    //const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(true)

    const handleSubmit = values => {
        dispatch(loginUser(values))
    }

    const handleClickGoogle = () => {
        dispatch(loginWithGoogle())
    }

    const initialValues = {
        email : '',
        password : ''
    }

    const schema = Yup.object().shape({
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
                            Ingresar con Google
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
                        <Typography variant="subtitle1">Ingrese con su correo electronico</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form>
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
                        <Typography 
                            onClick={() => handleChangeForm('resetPass')}
                            color={theme.palette.secondary.main}
                            variant="body2"
                        >
                             Olvido su clave?
                        </Typography>
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

export default AuthLogin;
