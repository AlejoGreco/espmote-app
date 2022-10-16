import { variablesNames, variablesUnits } from '../constants'

export const chartLinesColors = (theme, key) => {
    const colors = {
        temp: {
            borderColor: [
                theme.palette.error.dark,
                theme.palette.orange.dark,
                theme.palette.warning.dark,
                theme.palette.secondary.main
            ],
            backgroundColor: [
                theme.palette.error.light,
                theme.palette.orange.light,
                theme.palette.warning.light,
                theme.palette.secondary.light
            ]
        },
        hum: {
            borderColor: [
                theme.palette.primary[800],
                theme.palette.secondary[800],
                theme.palette.success.dark,
                theme.palette.primary.main,
            ],
            backgroundColor: [
                theme.palette.primary.light,
                theme.palette.secondary.light,
                theme.palette.success.light,
                theme.palette.primary.light,
            ]
        },
        co2: {
            borderColor: [
                theme.palette.success.dark,
                theme.palette.warning.dark,
                theme.palette.secondary.dark,
                theme.palette.primary.dark,
            ],
            backgroundColor: [
                theme.palette.success.light,
                theme.palette.warning.light,
                theme.palette.secondary.light,
                theme.palette.primary.light
            ]
        },
        level: {
            borderColor: [
                theme.palette.primary[800],
                theme.palette.secondary[800],
                theme.palette.success.dark,
                theme.palette.primary.main,
            ],
            backgroundColor: [
                theme.palette.primary.light,
                theme.palette.secondary.light,
                theme.palette.success.light,
                theme.palette.primary.light,
            ]
        }
    }

    return colors[key]
}

export const getChartLabels = timeArray => timeArray.map(t => new Date(parseInt(t)).toLocaleString())

export const getChartDatasets = (dataArray, theme) => {
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
}


export const getChartOptions = (type, keys) => {
    const title = {
        1: 'Humedad vs Tiempo',
        2: 'Temperatura vs Tiempo',
        3: 'Humedad y Temperatura vs Tiempo',
        4: 'Consentracion Co2 vs Tiempo',
        5: 'Varios vs Tiempo'
    }

    const scales = (keys.length > 1) 
        ? {
            y0: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    callback: function(value, index, ticks) {
                        return value + variablesUnits[keys[0]];
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
                        return value + variablesUnits[keys[1]];
                    }
                }
            }
        } 
        : {
            y0: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    callback: function(value, index, ticks) {
                        return value + variablesUnits[keys[0]];
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
        scales
    }
    return  options
}