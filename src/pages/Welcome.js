import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Login from './Login'
import Register from './Register'
import ResetPass from './ResetPass'
import { Container } from '@mui/system'
import GlobalAuthWrapper from '../components/authForms/GlobalAuthWrapper'

const Welcome = () => {

    const [form, setForm] = useState('login')

    const handleChangeForm = form => {
        setForm(form)
    }

    const renderForm = form => {
        switch (form) {
            case 'login':
                return <Login handleChangeForm={handleChangeForm}/>
            case 'register':
                return <Register handleChangeForm={handleChangeForm}/>
            case 'resetPass':
                return <ResetPass handleChangeForm={handleChangeForm}/>
            default:
                return <Login handleChangeForm={handleChangeForm}/>
        }
    }

    return (
        <Grid container>
            <Grid item 
                xs={12} sm={12} md={6} lg={6} xl={8}
                justifyContent='center'
                alignContent='center'
            >
                <Box sx={{
                        backgroundImage: 'url("https://predictabledesigns.com/wp-content/uploads/2018/01/HeroImage2.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: 'center',
                        height: '100%'
                    }}>
                        <Container sx={{height: '100%'}}>
                        <Grid container direction='column'
                            sx={{height: '100%', py: '4em' }}>
                            <Grid item>
                                <Typography variant='h1' color='#fff'>Espmote aplicacion web</Typography>
                                <Typography variant='h3' color='#fff'>Controle su proceso desde cualquier lugar</Typography>
                            </Grid>
                            <Grid item sx={{ my: '3em' }}>
                                <Typography color='#fff' sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Molestias doloremque tempora placeat assumenda harum? Eligendi, 
                                    ad atque consequuntur nostrum unde modi libero beatae nulla necessitatibus labore quam provident asperiores dolorem?
                                </Typography>
                            </Grid>
                        </Grid>
                        </Container>                        
                </Box>
            </Grid>
            <Grid item 
                xs={12} sm={12} md={6} lg={6} xl={4}
                justifyContent='center'
            >
                <GlobalAuthWrapper>
                    {
                        renderForm(form)
                    }
                </GlobalAuthWrapper>
            </Grid>
        </Grid>
    )
}

export default Welcome