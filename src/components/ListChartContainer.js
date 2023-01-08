import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, LinearProgress } from '@mui/material'
import Charts from './charts/Charts'
import { setHistoryLoading } from '../store/slices/nodeDetails'
import { useDetails } from '../hooks/useDetails'
import { useHistory } from '../hooks/useHistory'
import { Controls } from './charts/Controls'
import { filterControlValues } from '../constants'

const ListChartContainer = ({ nodeId }) => {
    const dispatch = useDispatch()
    const [current, setCurrent] = useState(filterControlValues[0].value)
    const { type, name } = useSelector(state => state.nodes.nodesData).find(n => n.id === nodeId)

    const { loadingCurrent, nodeCurrentHistory, setLoadingDetails } = useDetails(nodeId, current === filterControlValues[0].value)
    const { loadingHistory, nodeHistory } = useHistory(nodeId, current)

    const handleCurrent = useCallback(value => {
        if(value !== current){
            if(value === filterControlValues[0].value)
                setLoadingDetails(true)
            else
                dispatch(setHistoryLoading())
            setCurrent(value)
        }
    }, [dispatch, setCurrent, setLoadingDetails, current])

    console.log(`PETICION A : ${current}`)
    if((loadingCurrent && current === filterControlValues[0].value) || (loadingHistory && current !== filterControlValues[0].value)){
        return (
            <Grid item xs={12}>
                <LinearProgress color="secondary"/>
            </Grid>
        )
    }

    if(current === filterControlValues[0].value && (nodeCurrentHistory.data.length <= 1 || !type))
        return (
            <Grid item xs={12}>
                <h2>No hay datos disponibles para el nodo {name} - Id: {nodeId}</h2> 
            </Grid>
        )

    if(current !== filterControlValues[0].value && (nodeHistory.data.length <= 1 || !type))
        return (
            <Grid item xs={12}>
                <h2>No hay datos historicos disponibles para el nodo {name} - Id: {nodeId} - Periodo {current}</h2> 
            </Grid>
        )

    return (
        <>
            <Controls node={{name, id: nodeId}} handleCurrent={handleCurrent} filterInitial={current}/>
            {
                current === filterControlValues[0].value ?
                    <Charts nodeType={type} allNodeData={nodeCurrentHistory.data} nodeTimes={nodeCurrentHistory.time} />
                :
                    <Charts nodeType={type} allNodeData={nodeHistory.data} nodeTimes={nodeHistory.time} />
            }
        </>
    )
}

export default ListChartContainer