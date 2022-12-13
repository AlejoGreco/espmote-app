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

export const getChartOptions = () => {
    const options = {
        xaxis: {
            type: 'datetime'
        }
    }

    return options
}

/*export const getChartDatasets = (dataArray, timeArray) => {
    const datasets = []
    const dataKeys = Object.keys(dataArray[0]).filter(k => k !== 'type')
    const uniqueKeys = [...new Set(dataKeys.map(k => k.slice(0, -1)))]

    dataKeys.forEach((key, ind) => {
        const sNum = key[key.length - 1]
        const kaux = key.slice(0, -1)

        datasets.push({
            label: `${variablesNames[kaux]} ${parseInt(sNum) + 1} [${variablesUnits[kaux]}]`,
            data: dataArray.map(data => data[key]),
            borderColor: chartLinesColors(theme, kaux).borderColor[sNum],
            backgroundColor: chartLinesColors(theme, kaux).backgroundColor[sNum],
            yAxisID: uniqueKeys[0] === kaux ? 'y0' : 'y1'
        })
    })
    return datasets
}*/