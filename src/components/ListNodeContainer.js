import React from 'react'
import { useSelector } from 'react-redux'
import NodesTable from './NodesTable'

const ListNodeContainer = () => {
    
    const { loading, nodesData } = useSelector(state => state.nodes)

    if(loading)
        return <h2>Cargando ... </h2>

    if(nodesData.length === 0)
        return <h2>No hay nodos dados de alta</h2>
    
    return (
        <div>
            <h3>Nodos</h3>
            <NodesTable nodos={nodesData}/>
        </div>
    )
}

export default ListNodeContainer