import React from 'react'
import { useSelector } from 'react-redux'
import Charts from './charts/Charts'

const loadingChartRender = type => {
    switch (type){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
            return <h2>Cargando... {type}</h2>
        default:
            return <h2>Cargando...</h2>
    }
}

const ListChartContainer = ({ nodeId }) => {
    const { nodeHistoryTime, nodeHistoryData, loading } = useSelector(state => state.nodeDetails)
    const { type } = useSelector(state => state.nodes.nodesData).filter(n => n.id === nodeId)[0]
    
    if(loading)
        return loadingChartRender(type)

    if(nodeHistoryTime[nodeId] === undefined || !type)
        return <h2>No hay datos disponibles para el nodo {nodeId}</h2> 

    return <Charts nodeType={type} allNodeData={nodeHistoryData[nodeId]} nodeLabels={nodeHistoryTime[nodeId]} />
}

export default ListChartContainer