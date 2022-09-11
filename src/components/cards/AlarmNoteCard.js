// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, Link } from '@mui/material'

// project imports
import MainCard from './MainCard';
import TotalIncomeCard from './../skeletons/TotalIncomeCard'

import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import { Link as LinkRouter } from 'react-router-dom';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}))

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const AlarmNoteCard = ({ isLoading }) => {
    const theme = useTheme()
    const alarm = 'Error ->'

    const renderContent = alarm => {
        if(alarm){
            return (
                <Link
                    to='/alarms'
                    component={LinkRouter} 
                    variant='subtitle1'
                    underline='hover'
                    color={theme.palette.error.main}
                >
                    {alarm}
                </Link>
            )
        }

        return (
            <Typography
                variant="subtitle2"
                sx={{
                    color: theme.palette.grey[500],
                    mt: 0.5
                }}
            >
                No tiene alarmas pendientes
            </Typography>
        )
    }

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: theme.palette.warning.light,
                                            color: theme.palette.warning.dark
                                        }}
                                    >
                                        <WarningAmberRoundedIcon fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{
                                        py: 0,
                                        mt: 0.45,
                                        mb: 0.45
                                    }}
                                    primary={<Typography variant="h4">Alarmas</Typography>}
                                    secondary={ renderContent(alarm) }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    )
}

export default AlarmNoteCard;
