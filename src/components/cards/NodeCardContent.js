import React from 'react'
import { Grid, Typography } from '@mui/material'
import { cardsVariables } from '../../constants'
import { variablesUnits } from '../../constants'

const NodeCardContent = ({item}) => {

    return (
        <Grid item flexGrow={1}>
            <Grid container alignItems='baseline' columnGap={2}>
                <Typography sx={{ fontSize: '1.4rem', fontWeight: 500 }}>
                    {cardsVariables[item[0]]}
                </Typography>
                <Typography sx={{ fontSize: '1.7rem', fontWeight: 500 }}>
                    {`${item[1]}${variablesUnits[item[0]]}`}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default NodeCardContent