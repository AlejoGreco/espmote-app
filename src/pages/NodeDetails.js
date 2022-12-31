import React from 'react'
import { Grid } from '@mui/material'
import PageFrame from '../components/PageFrame'
import { useParams } from 'react-router-dom'
import ListChartContainer from '../components/ListChartContainer'

const NodeDetails = () => {
    const { id } = useParams()

    return (
        <PageFrame>
            <Grid container spacing={3} justifyContent='center'>
                <ListChartContainer nodeId={id} />
            </Grid>
        </PageFrame>
    )
}

export default NodeDetails