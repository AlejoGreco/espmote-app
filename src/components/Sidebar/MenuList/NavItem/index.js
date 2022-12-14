import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { setMenuItem } from './../../../../store/slices/ui'
import { useNav } from '../../../../hooks/useNav'

// material-ui
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'


// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
    
    const { selected, dispatch, theme} = useNav(item)
    
    const Icon = item.icon;
    const itemIcon = item.icon && <Icon stroke={1.5} size="1.3rem" />

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = {
        component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
    }

    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget };
    }

    return (
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            sx={{
                borderRadius: `12px`,
                mb: 0.5,
                alignItems: 'flex-start',
                backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                py: level > 1 ? 1 : 1.25,
                pl: `${level * 24}px`
            }}
            onClick={() => dispatch(setMenuItem(item.id))}
            selected = {selected === item.id}
        >
            <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography variant='body1' color="inherit">
                        {item.title}
                    </Typography>
                }
                secondary={
                    item.caption && (
                        <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                            {item.caption}
                        </Typography>
                    )
                }
            />
            {item.chip && (
                <Chip
                    color={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                />
            )}
        </ListItemButton>
    )
}

export default NavItem;
