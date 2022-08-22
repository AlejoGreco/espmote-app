import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/slices/auth/thunks';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Toolbar } from '@mui/material'
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
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItemButton>
                </ListItem>
            </List>
        
        </>
    )
}

export default SideList