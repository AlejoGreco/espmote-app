import { Grid } from '@mui/material'
import { useTheme } from '@emotion/react'
import CustomChart from './CustomChart'
import { getChartLabels, getChartDatasets, getChartOptions } from '../../utils'


const Charts = ({nodeType, allNodeData, nodeLabels}) => {
    // Tipos de node 1: humedad - 2: temperatura - 3: mixto(temp + hum) - 4: silo(temp + hum + co2) - 5: indor()
    const theme = useTheme()
    const labels = getChartLabels(nodeLabels)
    const keys = Object.keys(allNodeData[0]).filter(k => k !== 'type')
    const uniqueKeys = [...new Set(keys.map(k => k.slice(0, -1)))]

    switch (nodeType){
        case '1':
        case '2':
        case '3':
            return (
                <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                    <CustomChart 
                        options={getChartOptions(nodeType, uniqueKeys)}
                        data={{
                            labels, 
                            datasets: getChartDatasets(allNodeData, theme)
                        }} 
                    />
                </Grid>
            )
        case '4':
            const co2Data = allNodeData.map(data => data.co20)
            const rest = allNodeData.map(data => ({hum0: data.hum0, temp0: data.temp0}))
            return (
                <>
                    <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                        <CustomChart 
                            options={getChartOptions('2', uniqueKeys)}
                            data={{
                                labels, 
                                datasets: getChartDatasets(rest, theme)
                            }} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                        <CustomChart 
                            options={getChartOptions('4', uniqueKeys)}
                            data={{
                                labels, 
                                datasets: getChartDatasets(co2Data, theme)
                            }} 
                        />
                    </Grid>
                </>
            )
        default:
            return (
                <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                    <h2>Error - tipo invalido de nodo - Type: {nodeType}</h2>
                </Grid>
            )
            
    }
}

export default Charts