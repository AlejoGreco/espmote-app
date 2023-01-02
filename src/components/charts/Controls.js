import React from 'react'
import { Grid, Typography, TextField, MenuItem } from '@mui/material'
import MainCard from '../cards/MainCard'
import BasicIconButton from '../BasicIconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search'
import CachedIcon from '@mui/icons-material/Cached';

const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
]

export const Controls = ({node}) => {
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
                                value={'today'}
                                onChange={e => {}}
                                sx={{
                                    '& .MuiSelect-select': {
                                        py: '.5rem !important'
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
                            <BasicIconButton Icon={SearchIcon} />
                        </Grid>
                        <Grid item>
                            <BasicIconButton Icon={CachedIcon} />
                        </Grid>
                        <Grid item>
                            <BasicIconButton Icon={ArrowBackIcon} />
                        </Grid>
                    </Grid>                    
                </Grid>
            </Grid>             
        </MainCard>
    </Grid>
  )
}
