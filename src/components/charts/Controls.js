import React, { useState } from 'react'
import { Grid, Typography, TextField, MenuItem } from '@mui/material'
import MainCard from '../cards/MainCard'
import BasicIconButton from '../BasicIconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search'
import CachedIcon from '@mui/icons-material/Cached';
import { useNavigate } from 'react-router-dom';

const status = [
    {
        value: 'current',
        label: 'Current'
    },
    {
        value: 'week',
        label: 'This Week'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'trimester',
        label: 'Trimester'
    }
]

export const Controls = ({node, handleCurrent}) => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(status[0].value)

    const handlerClick = (callback, param) => {
        callback(param)
        return resetFilter => {
            if(resetFilter)
                setFilter(status[0].value)
        }
    }

    return (
        <Grid item xs={12} sm={12} md={10} lg={8}>
            <MainCard>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Typography variant="subtitle2">Id {node.id}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4">{node.name}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between" gap={2}>
                            <Grid item>
                                <TextField
                                    select
                                    color='secondary'
                                    value={filter}
                                    onChange={e => setFilter(e.target.value)}
                                    sx={{
                                        '& .MuiSelect-select': {
                                            py: '.5rem !important',
                                        }
                                    }}
                                >
                                    {status.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item>
                                <BasicIconButton Icon={SearchIcon} handlerClick={() => handlerClick(handleCurrent, filter)(false)}/>
                            </Grid>
                            <Grid item>
                                <BasicIconButton Icon={CachedIcon} handlerClick={() => handlerClick(handleCurrent, 'current')(true)}/>
                            </Grid>
                            <Grid item>
                                <BasicIconButton Icon={ArrowBackIcon} handlerClick={() => handlerClick(() => navigate('/home'))(false)} />
                            </Grid>
                        </Grid>                    
                    </Grid>
                </Grid>             
            </MainCard>
        </Grid>
    )
}
