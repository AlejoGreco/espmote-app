import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import NodeCard from './cards/NodeCard'



const ListNodeContainer = () => {
    
    const { loading, nodesData } = useSelector(state => state.nodes)

    if(loading)
        return <h2>Cargando ... </h2>

    if(nodesData.length === 0)
        return <h2>No hay nodos dados de alta</h2>
    
    return (
        <div>
            <h3>Nodos</h3>
            <Grid container spacing={2}>
                {
                    nodesData.map(node => <NodeCard key={node.id} node={node}/>)
                }
            </Grid>
        </div>
    )
}

export default ListNodeContainer