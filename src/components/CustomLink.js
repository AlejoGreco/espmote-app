import React from 'react'
import { useMemo } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const CustomLink = ({ icon, primary, to }) => {

    const renderLink = useMemo(
    () =>
        React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
        }),
    [to],
    );
    
    return (
        <>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </>
    );
}

export default CustomLink