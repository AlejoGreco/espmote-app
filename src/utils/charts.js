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