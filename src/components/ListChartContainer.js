import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import Chart from './charts/Chart'

const loadingChartRender = type => {
    switch (type){
        case '1':
        case '2':
        case '3':
        case '4':
            return <h2>Cargando... {type}</h2>
        default:
            return <h2>Cargando...</h2>
    }
}

const chartsRender = (nodeType, id, allNodeData, nodeLabels) => {
    // Tipos de node 1: nivel - 2: indoor(temp + hum + nivel) - 3: silo(temp + hum) - 4: temperatura
    switch (nodeType){
        case '1':
        case '2':
        case '3':
            return (
                <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                    <Chart nodeId={id} data={allNodeData} labels={nodeLabels} type={nodeType}/>
                </Grid>
            )
        case '4':
            const {level, ...others} = allNodeData
            return (
                <>
                    <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                        <Chart nodeId={id} data={others} labels={nodeLabels} type='3'/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                        <Chart nodeId={id} data={level} labels={nodeLabels} type='1'/>
                    </Grid>
                </>
            )
        default:
            <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                <h2>Error - tipo invalido de nodo - Type: {nodeType}</h2>
            </Grid>
            return 
    }
}

const ListChartContainer = ({ nodeId }) => {
    const { nodeHistoryTime, nodeHistoryData, loading } = useSelector(state => state.nodeDetails)
    let { type } = useSelector(state => state.nodes.nodesData).filter(n => n.id === nodeId)[0]
    
    if(loading)
        return loadingChartRender(type)

    if(nodeHistoryTime[nodeId] === undefined || !type)
        return <h2>No hay datos disponibles para el nodo {nodeId}</h2> 

    return chartsRender(type, nodeId, nodeHistoryData, nodeHistoryTime)
}

export default ListChartContainer