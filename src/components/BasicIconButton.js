import React from 'react'
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    ButtonBase,
} from '@mui/material'


const BasicIconButton = ({Icon, handlerClick}) => {
    const theme = useTheme()

  return (
    <ButtonBase sx={{ borderRadius: '12px' }} onClick={handlerClick}>
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
            <Icon stroke={1.5} size="1.3rem" />
        </Avatar>
    </ButtonBase>
  )
}

export default BasicIconButton