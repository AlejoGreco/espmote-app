import { purple, green, deepOrange, indigo, amber } from '@mui/material/colors';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined'
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined'
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined'
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined'
import StormIcon from '@mui/icons-material/Storm'

export const cardTypeCustom = nType => {

    const customCard = {}
    switch (nType){
        case '1':
            customCard.Icon = WaterOutlinedIcon
            customCard.bg = indigo
            return customCard
        case '2':
            customCard.Icon = DeviceThermostatOutlinedIcon
            customCard.bg = deepOrange
            return customCard
        case '3':
            customCard.Icon = StormIcon
            customCard.bg = purple
            return customCard
        case '4':
            customCard.Icon = GrassOutlinedIcon
            customCard.bg = amber
            return customCard
        case '5':
            customCard.Icon = ForestOutlinedIcon
            customCard.bg = green
            return customCard
        default:
            customCard.Icon = ForestOutlinedIcon
            customCard.bg = purple
            return customCard
    }
}