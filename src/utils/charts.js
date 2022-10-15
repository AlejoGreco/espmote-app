import { variablesNames, variablesUnits } from '../constants'

export const chartLinesColors = (theme, key) => {
    const colors = {
        temp: {
            borderColor: [
                theme.palette.error.dark,
                theme.palette.error.main,
                theme.palette.orange.dark,
                theme.palette.orange.main
            ],
            backgroundColor: [
                theme.palette.error.light,
                theme.palette.error.light,
                theme.palette.orange.light,
                theme.palette.orange.light
            ]
        },
        hum: {
            borderColor: [
                theme.palette.primary[800],
                theme.palette.primary.main,
                theme.palette.secondary[800],
                theme.palette.secondary.main,
            ],
            backgroundColor: [
                theme.palette.primary.light,
                theme.palette.primary.light,
                theme.palette.secondary.light,
                theme.palette.secondary.light,
            ]
        },
        co2: {
            borderColor: [
                theme.palette.success.dark,
                theme.palette.success.main,
                theme.palette.warning.dark,
            ],
            backgroundColor: [
                theme.palette.primary.light,
                theme.palette.primary.light,
                theme.palette.warning.light,
            ]
        },
        level: {
            borderColor: [
                theme.palette.primary[800],
                theme.palette.primary.main,
                theme.palette.secondary[800],
                theme.palette.secondary.main,
            ],
            backgroundColor: [
                theme.palette.primary.light,
                theme.palette.primary.light,
                theme.palette.secondary.light,
                theme.palette.secondary.light,
            ]
        }
    }

    return colors[key]
}

export const getChartLabels = timeArray => {
    if(!timeArray) return null
    return timeArray.map(t => new Date(parseInt(t)).toLocaleString())
}

export const getChartDatasets = (dataArray, theme) => {
    const datasets = []
    const dataKeys = Object.keys(dataArray[0]).filter(k => k !== 'type')

    dataKeys.forEach((key, ind) => {
        datasets.push({
            label: `${variablesNames[key]} ${ind + 1} [${variablesUnits[key]}]`,
            data: dataArray.map(data => data[key]),
            borderColor: chartLinesColors(theme, key).borderColor[ind],
            backgroundColor: chartLinesColors(theme, key).backgroundColor[ind],
        })
    })
    return datasets
}

export const getChartDatasetsWithMulAxis = (dataArray, theme) => {
    const datasets = []
    const dataKeys = Object.keys(dataArray[0]).filter(k => k !== 'type')

    dataKeys.forEach((k, ind) => {
        datasets.push({
            label: `${variablesNames[k]} [${variablesUnits[k]}]`,
            data: dataArray.map(data => data[k]),
            borderColor: chartLinesColors(theme, k).borderColor[0],
            backgroundColor: chartLinesColors(theme, k).backgroundColor[0],
            yAxisID: `y${ind}`
        })
    })
    return datasets
}


export const getChartOptions = type => {
    const title = {
        1: 'Humedad vs Tiempo',
        2: 'Temperatura vs Tiempo',
        3: 'Humedad y Temperatura vs Tiempo',
        4: 'Consentracion Co2 vs Tiempo',
        5: 'Varios vs Tiempo'
    }

    const scales = {
        1: {
                y0: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    callback: function(value, index, ticks) {
                        return value + '%';
                    }
                }
            }
        },
        2: {
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
        },
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