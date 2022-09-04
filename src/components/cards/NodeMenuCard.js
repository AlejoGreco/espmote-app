import React from 'react'
import { Menu, MenuItem } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const NodeMenuCard = ({handleClose, anchorEl}) => {
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
        <MenuItem onClick={handleClose}>
            <EditIcon sx={{ mr: 1.75 }} /> Editar Nodo
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <DeleteIcon sx={{ mr: 1.75 }} /> Borrar Nodo
        </MenuItem>
    </Menu>
  )
}

export default NodeMenuCard