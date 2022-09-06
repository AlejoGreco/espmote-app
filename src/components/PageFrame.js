import React from 'react'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@emotion/react';
import Header from './header'
import { CssBaseline } from '@mui/material';

const PageFrame = ({window, children}) => {
    const theme = useTheme()
    const drawerWidth = 260

    // styles
    const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
        ...theme.typography.mainContent,
        ...(!open && {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            [theme.breakpoints.up('md')]: {
                marginLeft: -(drawerWidth - 20),
                width: `calc(100% - ${drawerWidth}px)`
            },
            [theme.breakpoints.down('md')]: {
                marginLeft: '20px',
                width: `calc(100% - ${drawerWidth}px)`,
                padding: '16px'
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: '10px',
                width: `calc(100% - ${drawerWidth}px)`,
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
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            width: `calc(100% - ${drawerWidth}px)`,
            [theme.breakpoints.down('md')]: {
                marginLeft: '20px'
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: '10px'
            }
        })
    }))

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
                    <Header handleLeftDrawerToggle={() => {}} />
                </Toolbar>
            </AppBar>

            {/* drawer */}
            {/*
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
            */}

            {/* main content */}
            <Main theme={theme} open={true}>
            {/*<Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />*/}
            Contenido
            </Main>
        </Box>
    )
}


export default PageFrame