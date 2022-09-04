import NodeCard from './cards/NodeCard'
import { Grid } from '@mui/material'
import { purple, green, deepOrange, indigo } from '@mui/material/colors';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined'
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined'
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined'
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined'


export const NodeItemList = ({ node }) => {

    const cardTypeCustom = nType => {
        const customCard = {}
        switch (nType){
            case '1':
                customCard.Icon = WaterOutlinedIcon
                customCard.bg = indigo
                return customCard
            case '2':
                customCard.Icon = ForestOutlinedIcon
                customCard.bg = purple
                return customCard
            case '3':
                customCard.Icon = GrassOutlinedIcon
                customCard.bg = green
                return customCard
            case '4':
                customCard.Icon = DeviceThermostatOutlinedIcon
                customCard.bg = deepOrange
                return customCard
            default:
                customCard.Icon = ForestOutlinedIcon
                customCard.bg = purple
                return customCard
        }
    }
    
    return(
        <Grid item xs={12} md={6} xl={4}>
            <NodeCard node={node} custom={cardTypeCustom(node.type)}/>
        </Grid>
    )
}

export default NodeItemList