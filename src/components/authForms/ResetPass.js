import React from 'react'
import AuthRstPass from './AuthRstPass'
import AuthCardWrapper from './AuthCardWrapper';

import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';


const ResetPass = ({handleChangeForm}) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <motion.div
            key="pass"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            exit={{ opacity: 0 }}
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
                                        Cambio de clave
                                    </Typography>

                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <AuthRstPass/>
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
                                sx={{
                                    "&:hover": {
                                        textDecoration: 'underline',
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                Volver a Login
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </AuthCardWrapper>
        </motion.div>
    )
}

export default ResetPass