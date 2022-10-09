import React from 'react'
import { useMemo } from 'react'
import { useTheme } from '@emotion/react'
import { getChartLabels, getChartDatasets, getChartOptions,} from '../../utils'
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