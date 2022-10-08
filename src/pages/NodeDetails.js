import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import PageFrame from '../components/PageFrame'
import NodeHistoryChart from '../components/charts/NodeHistoryChart'

const NodeDetails = () => {
    const { id } = useParams()
    return (
        <PageFrame>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h2>{`Node ${id} details con grid`}</h2>
                    <NodeHistoryChart nodeId={id}/>
                </Grid>
            </Grid>
        </PageFrame>
    )
}

export default NodeDetails