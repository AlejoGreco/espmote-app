import React from 'react'
import { Grid } from '@mui/material'
import PageFrame from '../components/PageFrame'
import { useDetails } from '../hooks/useDetails'
import ListChartContainer from '../components/ListChartContainer'

const NodeDetails = () => {
    const { id } = useDetails()

    return (
        <PageFrame>
            <Grid container spacing={3} justifyContent='center'>
                <ListChartContainer nodeId={id} />
            </Grid>
        </PageFrame>
    )
}

export default NodeDetails