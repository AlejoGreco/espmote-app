import React from 'react'

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthRegister from '../components/authForms/AuthRegister';


// ================================|| AUTH3 - LOGIN ||================================ //

const Register = ({handleChangeForm}) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Grid
                    container
                    direction={matchDownSM ? 'column-reverse' : 'row'}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                            <Typography
                                color={theme.palette.secondary.main}
                                gutterBottom
                                variant={matchDownSM ? 'h3' : 'h2'}
                            >
                                Registro de usuario
                            </Typography>
                            <Typography
                                variant="caption"
                                fontSize="16px"
                                textAlign={matchDownSM ? 'center' : 'inherit'}
                            >
                                Ingrese sus credenciales para continuar
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <AuthRegister />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Grid item container direction="column" alignItems="center" xs={12}>
                    <Typography 
                        onClick={() => handleChangeForm('login')}
                        color={theme.palette.secondary.main}
                        variant="body2"
                    >
                        Ya tienes una cuenta? Ingresa aqui!
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Register
