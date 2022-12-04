import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, LinearProgress } from '@mui/material'
import NodeCard from './cards/NodeCard'



const ListNodeContainer = () => {
    
    const { loading, nodesId, nodesData } = useSelector(state => state.nodes)

    if(loading)
        return  <LinearProgress color="secondary" />

    if(nodesId.length === 0)
        return <h2>No hay nodos dados de alta</h2>
    
    return (
        <Grid container justifyContent={{sm: 'center', md: 'flex-start'}} spacing={3}>
            {
                nodesData.length > 0 
                ?
                    nodesData.map(node => (
                        <Grid item key={node.id} xs={12} sm={8} md={6} lg={6} xl={4}>
                            <NodeCard skeleton={false} node={node}/>
                        </Grid>
                    ))
                :
                    nodesId.map(node => (
                        <Grid item key={node.nodeId} xs={12} sm={8} md={6} lg={6} xl={4}>
                            <NodeCard skeleton={true} />
                        </Grid>
                    ))
            }
        </Grid>
    )
}

export default ListNodeContainer