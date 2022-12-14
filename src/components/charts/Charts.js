//import { useTheme } from '@emotion/react'
import Chart from "react-apexcharts";
import { Box } from "@mui/material";
import { getChartSeries, getChartOptions } from '../../utils'


const Charts = ({nodeType, allNodeData, nodeLabels}) => {
    // Tipos de node 1: humedad - 2: temperatura - 3: mixto(temp + hum) - 4: silo(temp + hum + co2) - 5: indor()
    //const theme = useTheme()
    //const keys = Object.keys(allNodeData[0]).filter(k => k !== 'type')
    //const uniqueKeys = [...new Set(keys.map(k => k.slice(0, -1)))]

    switch (nodeType){
        case '1':
        case '2':
        case '3':
            return (
                <Chart 
                    type='line'
                    options={getChartOptions()}
                    series={getChartSeries(allNodeData, nodeLabels)}
                />
            )
        case '4':
            const co2Data = allNodeData.map(data => ({co20: data.co20}))
            const rest = allNodeData.map(data => ({hum0: data.hum0, temp0: data.temp0}))
            return (
                <>
                    <Box my={4}>
                        <Chart 
                            type='line'
                            options={getChartOptions()}
                            series={getChartSeries(co2Data, nodeLabels)}
                        />
                    </Box>
                    <Box>
                        <Chart 
                            type='line'
                            options={getChartOptions()}
                            series={getChartSeries(rest, nodeLabels)}
                        />
                    </Box>
                </>
            )
        default:
            return  <h2>Error - tipo invalido de nodo - Type: {nodeType}</h2>    
    }
}

export default Charts