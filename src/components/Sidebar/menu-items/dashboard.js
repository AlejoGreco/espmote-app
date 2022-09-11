import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'


// constant
const icons = {
    IconDash: GridViewRoundedIcon,
    IconMember: CurrencyExchangeRoundedIcon,
    IconAlarm : WarningAmberRoundedIcon
}

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/home',
            icon: icons.IconDash,
            breadcrumbs: false
        },
        {
            id: 'alarms',
            title: 'Alarmas',
            type: 'item',
            url: '/alarms',
            icon: icons.IconAlarm,
            breadcrumbs: false
        },
        {
            id: 'membresy',
            title: 'Membresia',
            type: 'item',
            url: '/membresy',
            icon: icons.IconMember,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
