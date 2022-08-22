import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Toolbar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';

const SideList = () => {

    const listItemsOne = [
        {
          Icon: <HomeIcon />,
          text: "Home"
        },
        {
          Icon: <PaidIcon />,
          text: "Mebresia"
        },
        {
          Icon: <PersonIcon />,
          text: "Mi perfil"
        }
    ]

    const listItemsTwo = [
        {
          Icon: <LogoutIcon />,
          text: "LogOut"
        }
    ]

    return (
        <div>
        <Toolbar />
        <Divider />
        <List>
            {listItemsOne.map(item => (
            <ListItem key={item.text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {item.Icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {listItemsTwo.map(item => (
            <ListItem key={item.text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {item.Icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </div>
    )
}

export default SideList