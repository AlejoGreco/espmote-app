import React from 'react'
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    ButtonBase,
} from '@mui/material'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const NotificationDummy = () => {
    const theme = useTheme()

  return (
    <Box
        sx={{
            /*ml: 2,
            mr: 3,
            [theme.breakpoints.down('md')]: {
                mr: 2
            }*/
        }}
    >
        <ButtonBase sx={{ borderRadius: '12px' }}>
            <Avatar
                variant="rounded"
                sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: 'all .2s ease-in-out',
                    background: theme.palette.secondary.light,
                    color: theme.palette.secondary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                        background: theme.palette.secondary.dark,
                        color: theme.palette.secondary.light
                    }
                }}
                aria-haspopup="true"
                color="inherit"
            >
                <NotificationsNoneIcon stroke={1.5} size="1.3rem" />
            </Avatar>
        </ButtonBase>
    </Box>
  )
}

export default NotificationDummy