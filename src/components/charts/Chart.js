import React from 'react'
import { useMemo } from 'react'
import { getChartOptions } from '../../utils'
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

const Chart = ({type, data}) => {
    const options = useMemo(() => getChartOptions(type), [type])
    
    return (
        <Line options={options} data={data} />    
    )
}

export default Chart