import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Toolbar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import CustomLink from './CustomLink';

const SideList = () => {

    const listItemsOne = [
        {
          Icon: <HomeIcon />,
          text: "Home",
          path: 'home'
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
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.Icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
            <List>
                {/*<ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItemButton>
                </ListItem>*/}
                <CustomLink to='/membresy' primary='Logout' icon={<LogoutIcon />}/>
            </List>
        
        </>
    )
}

export default SideList