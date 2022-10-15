import { Grid } from '@mui/material'
import { useTheme } from '@emotion/react'
import Chart from './Chart'
import { getChartLabels, getChartDatasets, getChartDatasetsWithMulAxis } from '../../utils'


const Charts = ({nodeType, allNodeData, nodeLabels}) => {
    // Tipos de node 1: humedad - 2: temperatura - 3: mixto(temp + hum) - 4: silo(temp + hum + co2) - 5: indor()
    const theme = useTheme()
    const labels = getChartLabels(nodeLabels)

    switch (nodeType){
        case '1':
        case '2':
            return (
                <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                    <Chart 
                        type={nodeType}
                        data={{
                            labels, 
                            datasets: getChartDatasets(allNodeData, theme)
                        }} 
                    />
                </Grid>
            )
        case '3':
            return (
                <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                    <Chart 
                        type={nodeType}
                        data={{
                            labels, 
                            datasets: getChartDatasetsWithMulAxis(allNodeData, theme)
                        }} 
                    />
                </Grid>
            )
        case '4':
            const co2Data = allNodeData.map(data => data.co2)
            const rest = allNodeData.map(data => ({hum: data.hum, temp: data.temp}))
            return (
                <>
                    <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                        <Chart 
                            type={nodeType}
                            data={{
                                labels, 
                                datasets: getChartDatasetsWithMulAxis(rest, theme)
                            }} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                        <Chart 
                            type={nodeType}
                            data={{
                                labels, 
                                datasets: getChartDatasets(co2Data, theme)
                            }} 
                        />
                    </Grid>
                </>
            )
        default:
            <Grid item xs={12} sm={12} md={11} lg={10} xl={10}>
                <h2>Error - tipo invalido de nodo - Type: {nodeType}</h2>
            </Grid>
            return 
    }
}

export default Charts