import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';

// constant
const icons = {
    IconDash: GridViewRoundedIcon,
    IconMember: CurrencyExchangeRoundedIcon
}

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/home',
            icon: icons.IconDash,
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
