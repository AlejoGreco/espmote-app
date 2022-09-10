import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/slices/auth/thunks'
import { useTheme } from '@mui/material/styles'
import {
    Avatar,
    Chip,
    Typography
} from '@mui/material'

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'


const Logout = () => {
    const theme = useTheme()
    const dispatch = useDispatch()

    const handleClick  = () => {
        dispatch(logoutUser())
    }

    return (
        <Chip
            sx={{
                height: '48px',
                alignItems: 'center',
                borderRadius: '27px',
                transition: 'all .2s ease-in-out',
                borderColor: theme.palette.primary.light,
                backgroundColor: theme.palette.primary.light,
                '&:hover': {
                    borderColor: theme.palette.primary.main,
                    background: `${theme.palette.primary.main}!important`,
                    color: theme.palette.primary.light
                },
                '& .MuiChip-label': {
                    lineHeight: 0,
                    paddingLeft: 0
                }
            }}
            icon={
                <Avatar
                    sx={{
                        ...theme.typography.mediumAvatar,
                        margin: '8px 0 8px 8px !important',
                        cursor: 'pointer',
                        backgroundColor: 'inherit',
                    }}
                    color="inherit"
                >
                    <LogoutRoundedIcon stroke={1.5}/>
                </Avatar>
            }
            label={<Typography>Logout</Typography>}
            variant="outlined"
            color="primary"
            onClick={handleClick}
        />
    )
}

export default Logout