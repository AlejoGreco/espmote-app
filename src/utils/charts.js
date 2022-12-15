import { variablesUnits, variablesNames } from "../constants"

const getChartTime = timeArray => timeArray.map(t => new Date(parseInt(t)).getTime())

const getChartDataSerie = (dataArray, timeArray) => {
    const dataChart = dataArray.map((value, index) => ({x: timeArray[index], y: value }))
    return dataChart
}

export const getChartSeries = (dataArray, timeArray) => {
    const dataKeys = Object.keys(dataArray[0]).filter(k => k !== 'type')
    const series = dataKeys.map(key => ({
        name: key, 
        data: getChartDataSerie(dataArray.map(obj => obj[key]), getChartTime(timeArray))
    }))
    return series
}

export const getChartOptions = type => {
    const options = {
        xaxis: {
            type: 'datetime'
        },
        theme: {
            palette: 'palette8'
        },
        stroke: {
            curve: 'smooth',
            width: 4
        }
    }

    if(type === 3){
        options.yaxis = [
            {
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                },
                title: {
                    text: `${variablesNames.hum} ${variablesUnits.hum}`,
                }
            },
            {
                opposite: true,
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                },
                title: {
                    text: `${variablesNames.temp} ${variablesUnits.temp}`,
                }
            }
        ]
    }

    return options
}