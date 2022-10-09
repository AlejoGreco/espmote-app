import React from 'react'
import { useMemo } from 'react'
import { useTheme } from '@emotion/react'
import { getChartLabels, chartLinesColors } from '../../utils'
import { legendLabels } from '../../constants'
import { Line } from 'react-chartjs-2'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const getChartOptions = type => {
    const title = {
        1: 'Nivel vs Tiempo',
        2: 'Grafica ERROR',
        3: 'Humedad y Temperatura vs Tiempo',
        4: 'Temperatura vs tiempo'
    }

    const scales = {
        1: {
                y0: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    callback: function(value, index, ticks) {
                        return value + 'mm';
                    }
                }
            }
        },
        2: {},
        3: {
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
        },
        4: {
            y0: {
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

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title[type]
            }
        },
        scales: scales[type]
    }
    return  options
}

const getChartDatasets = (dataArray, theme) => {
    const datasets = []
    if(!dataArray) return null

    const dataKeys = Object.keys(dataArray[0]).filter(k => k !== 'type')
    dataKeys.forEach((k, ind) => {
        datasets.push({
            label: legendLabels[k],
            data: dataArray.map(data => data[k]),
            borderColor: chartLinesColors(theme)[k].borderColor,
            backgroundColor: chartLinesColors(theme)[k].backgroundColor,
            yAxisID: `y${ind}`,
        })
    })
    return datasets
}

const Chart = ({type, nodeId, data, labels}) => {
    const theme = useTheme()

    const datasets = useMemo(() => {
        return {
            labels: getChartLabels(labels[nodeId]),
            datasets: getChartDatasets(data[nodeId], theme)
        }
    }, [data, labels, nodeId, theme])

    const options = useMemo(() => getChartOptions(type), [type])
    
    return (
        <Line options={options} data={datasets} />    
    )
}

export default Chart