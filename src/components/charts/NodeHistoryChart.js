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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
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
    }
}

const getChartLabels = timeArray => {
    return timeArray.map(t => t)
}

const getChartDatasets = dataArray => {
    const datasets = []
    const dataKeys = Object.keys(dataArray[0]).filter(k => k !== 'type')
    dataKeys.forEach(k => {
        datasets.push({
            label: `${k}`,
            data: dataArray.map(d => d[k]),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        })
    })
    return datasets
}

const NodeHistoryChart = ({ nodeId }) => {    
    const { nodeHistoryData, nodeHistoryTime } = useSelector(state => state.nodeDetails)

    const data = useMemo(() => {
        return {
            labels: getChartLabels(nodeHistoryTime[nodeId]),
            datasets: getChartDatasets(nodeHistoryData[nodeId])
        }
    }, [nodeHistoryData, nodeHistoryTime, nodeId])

    return <Line options={options} data={data} />
}

export default NodeHistoryChart