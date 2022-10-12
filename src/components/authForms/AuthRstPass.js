import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { resetPass } from '../../store/slices/auth';
import WpTextField from '../WpTextField';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Divider,
    Grid,
    Container,
    Typography,
    Link,
    Alert,
    AlertTitle
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Link as RouterLink } from 'react-router-dom';


const AuthRstPass = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const {error, feedback} = useSelector(state => state.userAuth)

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
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
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
                            -
                        </Button>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Ingrese con su correo de recuperacion</Typography>
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
                            Enviar
                        </Button>
                    </Box>
                </Form>
            </Formik>
        </>
  )
}

export default AuthRstPass