import { Grid, Typography } from '@mui/material'
import NodeCardContent from '../components/cards/NodeCardContent'

export const renderNodeData = nodeData => {
    if(nodeData){
        const nodeDataArray = Object.entries(nodeData)
        return nodeDataArray.map((item, i) => <NodeCardContent key={i} item={item} /> )
    }
    return (
        <Grid item flexGrow={1}>
            <Typography sx={{ fontSize: '1.4rem', fontWeight: 500 }}>
                No hay datos
            </Typography>
        </Grid>
    )
}