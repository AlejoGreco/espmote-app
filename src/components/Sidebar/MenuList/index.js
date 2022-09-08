// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from '../menu-items';
import { useState } from 'react';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const [active, setActive] = useState('dashboard')

    console.log(active)
    const  handlerActive = id => {
        console.log(id)
        setActive(id)
    }

    console.log(active)
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} active={active} handlerActive={handlerActive}/>;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
