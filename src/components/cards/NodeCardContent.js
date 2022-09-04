import React from 'react'
import { Grid, Typography } from '@mui/material'

const NodeCardContent = ({item}) => {
  return (
    <Grid item flexGrow={1}>
        <Typography sx={{ fontSize: '1.8rem', fontWeight: 500, mt: 1.75 }}>
            {`${item[0]}`}
        </Typography>
        <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mb: 0.75 }}>
            {`${item[1]}`}
        </Typography>
    </Grid>
  )
}

export default NodeCardContent