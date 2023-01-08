import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, LinearProgress } from '@mui/material'
import Charts from './charts/Charts'
import { useDetails } from '../hooks/useDetails'
import { useHistory } from '../hooks/useHistory'
import { Controls } from './charts/Controls'

const ListChartContainer = ({ nodeId }) => {
    //const { nodeHistoryTime, nodeHistoryData, loading } = useSelector(state => state.nodeDetails)
    const [current, setCurrent] = useState('current')
    const { type, name } = useSelector(state => state.nodes.nodesData).find(n => n.id === nodeId)

    const { loadingCurrent, nodeCurrentHistory } = useDetails(nodeId, current === 'current')
    const { loadingHistory, nodeHistory } = useHistory(nodeId, current)

    console.log(`PETICION A : ${current}`)
    if((loadingCurrent && current === 'current') || (loadingHistory && current !== 'current')){
        return (
            <Grid item xs={12}>
                <LinearProgress color="secondary"/>
            </Grid>
        )
    }

    if(current === 'current' && (nodeCurrentHistory.data.length <= 1 || !type))
        return (
            <Grid item xs={12}>
                <h2>No hay datos disponibles para el nodo {name} - Id: {nodeId}</h2> 
            </Grid>
        )

    if(current !== 'current' && (nodeHistory.data.length <= 1 || !type))
        return (
            <Grid item xs={12}>
                <h2>No hay datos historicos disponibles para el nodo {name} - Id: {nodeId} - Periodo {current}</h2> 
            </Grid>
        )

    return (
        <>
            <Controls node={{name, id: nodeId}} handleCurrent={value => setCurrent(value)}/>
            {
                current === 'current' ?
                    <Charts nodeType={type} allNodeData={nodeCurrentHistory.data} nodeTimes={nodeCurrentHistory.time} />
                :
                    <Charts nodeType={type} allNodeData={nodeHistory.data} nodeTimes={nodeHistory?.time} />
            }
        </>
    )
}

export default ListChartContainer