// assets
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// constant
const icons = { IconProfile: PersonRoundedIcon }

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const profile = {
    id: 'profile',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Mi perfil',
            type: 'item',
            url: '/profile',
            icon: icons.IconProfile,
            breadcrumbs: false
        }
    ]
};

export default profile;
