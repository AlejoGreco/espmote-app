import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'

const WpTextField = ({name, ...muiProps}) => {
    const [field, meta] = useField(name)
    
    const config = {
        ...field,
        ...muiProps,
        fullWidth : true,
        variant: 'standard',
        
    }

    if(meta && meta.touched && meta.error){
        config.error = true
        config.helperText = meta.error
    }
        
    return (
        <TextField {...config}/>
    )
}

export default WpTextField