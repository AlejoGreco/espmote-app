import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useTheme } from '@emotion/react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const chartLinesColors = theme => (
    {
        temp: {
            borderColor: theme.palette.error.main,
            backgroundColor: theme.palette.error.light
        },
        hum: {
            borderColor: theme.palette.success.dark,
            backgroundColor: theme.palette.success.light
        },
        level: {
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light
        }
    }
)

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        }
    },
    scales: {
        y0: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
                callback: function(value, index, ticks) {
                    return value + '%';
                }
            }
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },
            ticks: {
                callback: function(value, index, ticks) {
                    return value + '°C';
                }
            }

        }
    }
}

const getChartLabels = timeArray => {
    if(!timeArray) return null
    return timeArray.map(t => new Date(parseInt(t)).toLocaleString())
}

const getChartDatasets = (dataArray, theme) => {
    const datasets = []

    if(!dataArray) return null

    const dataKeys = Object.keys(dataArray[0]).filter(k => k !== 'type')
    dataKeys.forEach((k, ind) => {
        datasets.push({
            label: `${k}`,
            data: dataArray.map(data => data[k]),
            borderColor: chartLinesColors(theme)[k].borderColor,
            backgroundColor: chartLinesColors(theme)[k].backgroundColor,
            yAxisID: `y${ind}`,
        })
    })
    return datasets
}

const NodeHistoryChart = ({ nodeId }) => {    
    const { nodeHistoryData, nodeHistoryTime, loading } = useSelector(state => state.nodeDetails)
    const theme = useTheme()

    const data = useMemo(() => {
        return {
            labels: getChartLabels(nodeHistoryTime[nodeId]),
            datasets: getChartDatasets(nodeHistoryData[nodeId], theme)
        }
    }, [nodeHistoryData, nodeHistoryTime, nodeId, theme])

    if(loading)
        return <h2>Cargando...</h2> 

    if(data.datasets === null || data.labels === null)
        return <h2>No hay datos disponibles para el nodo {nodeId}</h2> 

    return <Line options={options} data={data} />
}

export default NodeHistoryChart