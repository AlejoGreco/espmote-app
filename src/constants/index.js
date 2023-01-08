import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded'

export const DRAWER_WIDTH = 260

// Constants objects
export const accordionIcons = {
    nodeForm: CloudUploadRoundedIcon
}

export const variablesNames = {
    temp: 'Temperatura',
    hum: 'Humedad',
    humg: 'Humedad',
    level: 'Nivel',
    co2: 'Co2'
}

export const variablesUnits = {
    temp: '°C',
    hum: '%',
    humg: '%',
    level: 'mm',
    co2: 'ppu'
}

export const filterControlValues = [
    {
        value: 'current',
        label: 'Current'
    },
    {
        value: 'week',
        label: 'This Week'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'trimester',
        label: 'Trimester'
    }
]