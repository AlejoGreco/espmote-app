import NodeCard from './cards/NodeCard';
import { Grid } from '@mui/material'

export const NodeItemList = ({ node }) => {
    
    return(
        <Grid item xs={12} md={6} xl={4}>
            <NodeCard node={node} />
        </Grid>
    )
}

export default NodeItemList