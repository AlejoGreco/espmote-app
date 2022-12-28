//import { useTheme } from '@emotion/react'
import Chart from "react-apexcharts";
import MainCard from "../cards/MainCard";
import { getChartSeries, getChartOptions } from '../../utils'
import { Grid } from "@mui/material";


const Charts = ({nodeType, allNodeData, nodeTimes}) => {
    // Tipos de node 1: humedad - 2: temperatura - 3: mixto(temp + hum) - 4: silo(temp + hum + co2) - 5: indor()
    //const theme = useTheme()
    //const keys = Object.keys(allNodeData[0]).filter(k => k !== 'type')
    //const uniqueKeys = [...new Set(keys.map(k => k.slice(0, -1)))]

    switch (nodeType){
        case '1':
        case '2':
        case '3':
            return (
                <Grid item xs={12} sm={10} md={8}>
                    <MainCard>
                        <Chart 
                            type='line'
                            options={getChartOptions(nodeType)}
                            series={getChartSeries(allNodeData, nodeTimes)}
                        />
                    </MainCard>
                </Grid> 
            )
        case '4':
            const co2Data = allNodeData.map(data => ({co20: data.co20}))
            const rest = allNodeData.map(data => ({hum0: data.hum0, temp0: data.temp0}))
            return (
                <>
                    <Grid item xs={12} sm={10} md={8} xl={6}>
                        <MainCard>
                            <Chart 
                                type='line'
                                options={getChartOptions(4)}
                                series={getChartSeries(co2Data, nodeTimes)}
                            />
                        </MainCard>
                    </Grid>
                    <Grid item xs={12} sm={10} md={8} xl={6}>
                        <MainCard>
                            <Chart 
                                type='line'
                                options={getChartOptions(3)}
                                series={getChartSeries(rest, nodeTimes)}
                            />
                        </MainCard>
                    </Grid>
                </>
            )
        default:
            return  <h2>Error - tipo invalido de nodo - Type: {nodeType}</h2>    
    }
}

export default Charts