import { useMemo, useState } from 'react'

// material-ui
import { styled, useTheme } from '@mui/material/styles'
import { Avatar, Box, Grid, Typography } from '@mui/material'

// project imports
import MainCard from './MainCard'
import NodeMenuCard from './NodeMenuCard'
import NodeCardContent from './NodeCardContent'
import SkeletonEarningCard from '../skeletons/EarningCard'
import { cardTypeCustom } from './cardHelpers'

// assets
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const CardWrapper = styled(MainCard)(({ theme, bg }) => ({
    backgroundColor: bg[600],
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: bg[800],
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: bg[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const NodeCard = ({ isLoading, node }) => {
    const theme = useTheme()

    const [anchorEl, setAnchorEl] = useState(null)
    const custom = useMemo(() => cardTypeCustom(node.type), [node])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

    const renderData = nodeData => {
        if(nodeData){
            const nodeDataArray = Object.entries(nodeData)
            return nodeDataArray.map((item, i) => <NodeCardContent key={i} item={item} /> )
        }
        return (
            <Grid item flexGrow={1}>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mt: 1.75 }}>
                    No hay datos
                </Typography>
            </Grid>
        )
        
    }


    return (
        <Grid item xs={12} md={6} xl={4}>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} content={false} bg={custom.bg}>
                    <Box p={2.25}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item display='flex' alignItems='center'>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                backgroundColor: custom.bg[800],
                                                color: custom.bg[100],
                                                mt: 1,
                                                mr: 2
                                            }}
                                        >
                                            <custom.Icon />
                                        </Avatar>
                                        <Typography sx={{ fontSize: '1.6rem', fontWeight: 500, mt: 1}} display='inline-block'>
                                            {`${node.name}`}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.mediumAvatar,
                                                backgroundColor: custom.bg[600],
                                                color: custom.bg[100],
                                                zIndex: 1
                                            }}
                                            aria-controls="menu-earning-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreHorizIcon fontSize="inherit" />
                                        </Avatar>
                                        <NodeMenuCard handleClose={handleClose} anchorEl={anchorEl} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center" columnSpacing={2}>
                                    {
                                        renderData(node.data) 
                                    }
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: custom.bg[200]
                                    }}
                                >
                                    {`Id ${node.id}`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </Grid>
    )
}

export default NodeCard
