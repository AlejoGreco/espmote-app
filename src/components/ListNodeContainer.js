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
        <Grid container justifyContent={{sm: 'center', md: 'flex-start'}} spacing={3}>
            {
                nodesData.map(node => (
                    <Grid item key={node.id} xs={12} sm={8} md={6} lg={6} xl={4}>
                        <NodeCard node={node}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ListNodeContainer