import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@emotion/react';
import Header from './header'
import Sidebar from './Sidebar';
import SnackBarWrapper from './SnackBarWrapper';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerVisibility } from '../store/slices/ui';

// project constants
import { DRAWER_WIDTH } from '../constants';


// styles
const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(DRAWER_WIDTH - 20),
            width: `calc(100% - ${DRAWER_WIDTH}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}))


const PageFrame = ({ children }) => {
    const theme = useTheme()
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))

    const dispatch = useDispatch()
    const drawerOpen = useSelector(state => state.ui.drawerOpened)
    
    useEffect(() => {
        dispatch(setDrawerVisibility(!matchDownMd))
    }, [matchDownMd, dispatch]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: theme.transitions.create('width')
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={() => { dispatch(setDrawerVisibility(!drawerOpen)) }} />
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Sidebar drawerOpen={drawerOpen} drawerToggle={() => { dispatch(setDrawerVisibility(!drawerOpen)) }} />
            
            {/* main content */}
            <Main theme={theme} open={drawerOpen}>
                {children}
            </Main>
            <SnackBarWrapper />
        </Box>
    )
}


export default PageFrame