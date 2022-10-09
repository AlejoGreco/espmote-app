import { legendLabels } from '../constants'

export const chartLinesColors = theme => (
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

export const getChartLabels = timeArray => {
    if(!timeArray) return null
    return timeArray.map(t => new Date(parseInt(t)).toLocaleString())
}

export const getChartDatasets = (dataArray, theme) => {
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


export const getChartOptions = type => {
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