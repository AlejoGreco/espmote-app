import React, { useEffect, useState } from 'react'
import { Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorNodes } from '../store/slices/nodes'

const SnackBarWrapper = () => {
    const { feedback, error } = useSelector(state => state.nodes)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(feedback && feedback.target === 'snack')
            setOpen(true)
        if(error && error.target === 'snack')
            setOpen(true)
    }, [error, feedback])

    const handleClose = () => {
        dispatch(setErrorNodes(null))
        setOpen(false)
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={open}
            onClose={handleClose}
            message={(feedback && `${feedback.message}`) || (error && `${error.message}`)}
            sx={{mx : '16px'}}
        />
    )
}

export default SnackBarWrapper