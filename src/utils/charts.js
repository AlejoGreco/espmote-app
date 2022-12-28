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

const getCharAxisTitles = type => {
    const numType = parseInt(type)

    switch (numType){
        case 1:
            return [`${variablesNames.hum} ${variablesUnits.hum}`]
        case 2:
            return [`${variablesNames.temp} ${variablesUnits.temp}`]
        case 3:
            return [`${variablesNames.hum} ${variablesUnits.hum}`, `${variablesNames.temp} ${variablesUnits.temp}`]
        case 4:
            return [`${variablesNames.co2} ${variablesUnits.co2}`]
        default:
            return ['']
    }
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

    const axis = getCharAxisTitles(type)

    options.yaxis = axis.map((axi, index) => {
        const aux = {
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true
            },
            title: {
                text: axi
            }
        }
        if(index > 0){
            aux.opposite = true
        }
        return aux
    })

    return options
}