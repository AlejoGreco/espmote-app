// assets
import AdbIcon from '@mui/icons-material/Adb';

// constant
const icons = { IconBrandChrome: AdbIcon, IconHelp: AdbIcon };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default other;
