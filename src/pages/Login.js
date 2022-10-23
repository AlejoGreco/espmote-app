import React from 'react'
import AuthLogin from '../components/authForms/AuthLogin'
import AuthCardWrapper from '../components/authForms/AuthCardWrapper'

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';


// ================================|| AUTH3 - LOGIN ||================================ //

const Login = ({handleChangeForm}) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <motion.div
            key="login"
            initial={{ opacity: 0, rotateY: -180  }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
            exit={{ x: 500, opacity: 0 }}
        >
            <AuthCardWrapper>
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
                                        Bienvenido
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
                        <AuthLogin handleChangeForm={handleChangeForm}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item container direction="column" alignItems="center" xs={12}>
                            <Typography 
                                onClick={() => handleChangeForm('register')}
                                color={theme.palette.secondary.main}
                                variant="body2"
                            >
                                No tienes una cuenta? Registrate!
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>  
            </AuthCardWrapper> 
        </motion.div>      
    )
}

export default Login
