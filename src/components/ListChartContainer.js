import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, LinearProgress } from '@mui/material'
import Charts from './charts/Charts'
import { useDetails } from '../hooks/useDetails'
import { Controls } from './charts/Controls'

const ListChartContainer = ({ nodeId }) => {
    //const { nodeHistoryTime, nodeHistoryData, loading } = useSelector(state => state.nodeDetails)
    const [current, setCurrent] = useState('current')
    const { type, name } = useSelector(state => state.nodes.nodesData).find(n => n.id === nodeId)

    const { loading, nodeHistory } = useDetails(nodeId, current === 'current')

    console.log(`PETICION A : ${current}`)
    if(loading){
        return (
            <Grid item xs={12}>
                <LinearProgress color="secondary"/>
            </Grid>
        )
    }

    if(nodeHistory.data.length <= 1 || !type)
        return (
            <Grid item xs={12}>
                <h2>No hay datos disponibles para el nodo {name} - Id: {nodeId}</h2> 
            </Grid>
        )

    return (
        <>
            <Controls node={{name, id: nodeId}} handleCurrent={value => setCurrent(value)}/>
            {
                current === 'current' ?
                    <Charts nodeType={type} allNodeData={nodeHistory.data} nodeTimes={nodeHistory.time} />
                :
                    <Charts nodeType={type} allNodeData={nodeHistory.data} nodeTimes={nodeHistory.time} />
            }
        </>
    )
}

export default ListChartContainer