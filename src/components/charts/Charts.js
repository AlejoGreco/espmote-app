//import { useTheme } from '@emotion/react'
//import CustomChart from './CustomChart'
import Chart from "react-apexcharts";
import { getChartTime, getChartSeries, getChartOptions } from '../../utils'


const Charts = ({nodeType, allNodeData, nodeLabels}) => {
    // Tipos de node 1: humedad - 2: temperatura - 3: mixto(temp + hum) - 4: silo(temp + hum + co2) - 5: indor()
    //const theme = useTheme()
    const labels = getChartTime(nodeLabels)
    const keys = Object.keys(allNodeData[0]).filter(k => k !== 'type')
    const uniqueKeys = [...new Set(keys.map(k => k.slice(0, -1)))]

    switch (nodeType){
        case '1':
        case '2':
        case '3':
            console.log({options: getChartOptions(nodeType, uniqueKeys)})
            console.log({...getChartSeries(allNodeData, nodeLabels)})
            return (
                <Chart 
                    series={getChartSeries(allNodeData, labels).series}
                    type='line'
                    options={{xaxis: {type: 'datetime'}}}
                />
                /*<CustomChart 
                    options={getChartOptions(nodeType, uniqueKeys)}
                    data={{
                        labels, 
                        datasets: getChartDatasets(allNodeData, theme)
                    }} 
                />*/
            )
        case '4':
            const co2Data = allNodeData.map(data => data.co20)
            const rest = allNodeData.map(data => ({hum0: data.hum0, temp0: data.temp0}))
            return (
                <div>
                    {{dataCO2: getChartSeries(co2Data)}}
                    <hr />
                    {{data: getChartSeries(rest)}}
                </div>
                /*<>
                    <CustomChart 
                        options={getChartOptions('2', uniqueKeys)}
                        data={{
                            labels, 
                            datasets: getChartDatasets(rest, theme)
                        }} 
                    />
                    <CustomChart 
                        options={getChartOptions('4', uniqueKeys)}
                        data={{
                            labels, 
                            datasets: getChartDatasets(co2Data, theme)
                        }} 
                    />
                </>*/
            )
        default:
            return  <h2>Error - tipo invalido de nodo - Type: {nodeType}</h2>    
    }
}

export default Charts