import React from 'react'
import { Menu, MenuItem } from '@mui/material'
import TimelineIcon from '@mui/icons-material/Timeline'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteModal } from '../../assets/modals/modals'

const NodeMenuCard = ({handleClose, anchorEl}) => {

    const handleItemClick = callback => {
        handleClose()
        return callback
    }

  return (
    <Menu
        id="menu-earning-card"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        variant="selectedMenu"
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
    >
        <MenuItem onClick={() => handleItemClick()}>
            <TimelineIcon sx={{ mr: 1.75 }} /> Detalle
        </MenuItem>
        <MenuItem onClick={() => handleItemClick(deleteModal)('Hola', 'mundo')}>
            <DeleteIcon sx={{ mr: 1.75 }} /> Borrar Nodo
        </MenuItem>
    </Menu>
  )
}

export default NodeMenuCard