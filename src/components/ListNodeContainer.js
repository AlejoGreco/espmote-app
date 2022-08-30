import React from 'react'
import { useSelector } from 'react-redux'
import NodeItemList from './NodeItemList'


const ListNodeContainer = () => {
    
    const { loading, nodesData } = useSelector(state => state.nodes)

    if(loading)
        return <h2>Cargando ... </h2>

    if(nodesData.length === 0)
        return <h2>No hay nodos dados de alta</h2>
    
    return (
        <div>
            <h3>Nodos</h3>
            {
                nodesData.map(node => <NodeItemList node={node}/>)
            }
        </div>
    )
}

export default ListNodeContainer