import React, { useEffect, useState } from 'react'
import { Snackbar, Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorNodes } from '../store/slices/nodes'

const SnackBarWrapper = () => {
    const dispatch = useDispatch()
    const { feedback, error } = useSelector(state => state.nodes)
    const [snack, setSnack] = useState({open: false, msg: '', severity: 'info'})

    useEffect(() => {
        if(feedback && feedback.target === 'snack')
            setSnack({open: true, msg: feedback.message, severity: 'success'})
        if(error && error.target === 'snack')
            setSnack({open: true, msg: error.code, severity: 'error'})
    }, [error, feedback])

    const handleClose = () => {
        dispatch(setErrorNodes(null))
        setSnack({open: false, msg: '', severity: 'info'})
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={snack.open}
            autoHideDuration={10000}
            onClose={handleClose}
            sx={{mx : '16px'}}
        >
            <Alert onClose={handleClose} severity={snack.severity} sx={{ width: '100%' }} variant='filled'>
                {snack.msg}
            </Alert>
        </Snackbar>
    )
}

export default SnackBarWrapper