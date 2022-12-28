import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, LinearProgress } from '@mui/material'
import Charts from './charts/Charts'

const ListChartContainer = ({ nodeId }) => {
    const { nodeHistoryTime, nodeHistoryData, loading } = useSelector(state => state.nodeDetails)
    const { type, name } = useSelector(state => state.nodes.nodesData).find(n => n.id === nodeId)
    
    if(loading){
        return (
            <Grid item xs={12}>
                <LinearProgress color="secondary"/>
            </Grid>
        )
    }

    if(nodeHistoryTime[nodeId] === undefined || !type)
        return (
            <Grid item xs={12}>
                <h2>No hay datos disponibles para el nodo {name} - Id: {nodeId}</h2> 
            </Grid>
        )

    return (
        <Charts nodeType={type} allNodeData={nodeHistoryData[nodeId]} nodeTimes={nodeHistoryTime[nodeId]} />
    )
}

export default ListChartContainer