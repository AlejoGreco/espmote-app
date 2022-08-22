import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/slices/auth/thunks';
import { List, Divider, Toolbar, Button, Typography, Container } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import CustomLink from './CustomLink';

const SideList = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logoutUser())
    }

    const listItemsOne = [
        {
          Icon: <HomeIcon />,
          text: "Home",
          path: '/home'
        },
        {
          Icon: <PaidIcon />,
          text: "Mebresia",
          path: '/membresy'
        },
        {
          Icon: <PersonIcon />,
          text: "Mi perfil",
          path: '/profile'
        }
    ]

    return (
        <>
            <Toolbar />
            <Divider />
            <List>
                {
                    listItemsOne.map(item => (
                        <CustomLink to={item.path} key={item.text} primary={item.text} icon={item.Icon}/>
                    ))
                }
            </List>
            <Divider />
            
                <Container  disableGutters={true} sx={{ px: 2}}>
                    <Button
                        fullWidth
                        onClick={handleClick}
                        sx={{ my: 2}}
                        variant="contained"
                        startIcon={<LogoutIcon />}
                    >
                        <Typography variant='button'>Logout</Typography>
                    </Button>
                </Container>
            
        
        </>
    )
}

export default SideList