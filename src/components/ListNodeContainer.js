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
                nodesId.map(node => {
                    const findNode = nodesData.find(n => n.id === node.nodeId)
                    return (
                        <Grid item key={node.nodeId} xs={12} sm={8} md={6} lg={6} xl={4}>
                            <NodeCard skeleton={findNode === undefined} node={findNode} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default ListNodeContainer