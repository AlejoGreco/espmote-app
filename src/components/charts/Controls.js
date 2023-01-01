import React from 'react'
import { Grid, Typography, TextField, MenuItem } from '@mui/material'
import MainCard from '../cards/MainCard'

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
                            <Typography variant="subtitle2">Nodo {node.id}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4">{node.name}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <TextField
                        select
                        value={'today'}
                        onChange={e => {}}
                    >
                        {status.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>             
        </MainCard>
    </Grid>
  )
}
