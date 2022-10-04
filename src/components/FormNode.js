import React from 'react'
import { Avatar, Box, Button, Container, Typography, Alert, AlertTitle, ClickAwayListener } from '@mui/material'
import BackupIcon from '@mui/icons-material/Backup';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNode, setErrorNodes } from '../store/slices/nodes';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import WpTextField from './WpTextField';
import { useTheme } from '@emotion/react';

const FormNode = () => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.userAuth.id)
    const { error, feedback, nodesId } = useSelector(state => state.nodes)
    const theme = useTheme()

    const initialValues = {
        nodeId : '',
        name : ''
    }

    const schema = Yup.object().shape({
        nodeId : Yup.string().min(6, 'El id debe tener al menos 6 caracteres').required('Complete el id del nodo que desea agregar'),
        name : Yup.string().min(3, 'El Nombre debe tener al menos 3 caracteres').required('Complete el nombre del nodo que desea agregar')
    })

    const handleSubmit = (values, {resetForm}) => {
        if(nodesId.findIndex(n => n.nodeId === values.nodeId) !== -1){
            dispatch(setErrorNodes({code : 'Node creation error', message : 'This node id already exists', target : 'createNodeForm'}))
        }
        else if(nodesId.findIndex(n => n.name === values.name) !== -1){
            dispatch(setErrorNodes({code : 'Node creation error', message : 'This node name already exists', target : 'createNodeForm'}))
        }
        else{
            dispatch(addNewNode({node : { nodeId : values.nodeId, name : values.name }, userId : id}))
        }
        resetForm()
    }

    const handleClickAway = () => {
        if(feedback && feedback.target === 'createNodeForm')
            dispatch(setErrorNodes(null))
        if(error && error.target === 'createNodeForm')
            dispatch(setErrorNodes(null))
    }

    return (
        <ClickAwayListener
            onClickAway={handleClickAway}
        >
            <Box
                p={3}
                sx={{
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid',
                borderColor: theme.palette.primary[200] + 75,
                backgroundColor: theme.palette.background.default,
                }}
            >
                <Avatar 
                    sx={{ 
                        mb: 1, 
                        background: theme.palette.secondary.dark,
                        color: theme.palette.secondary.light
                    }}>
                        <BackupIcon />
                </Avatar>
                <Typography variant="h4">
                    Agregar nuevo nodo
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <WpTextField
                            id="nodeId"
                            name="nodeId"
                            label="Id del nodo"
                            placeholder='xxxxxxxx'
                            margin="normal"
                            color="secondary"
                            variant="standard"
                        />
                        <WpTextField
                            id="name"
                            name="name"
                            label="Nombre del nodo"
                            placeholder='Nodo sector A'
                            margin="normal"
                            color="secondary"
                            variant="standard"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ 
                                mt: 3, borderRadius: '12px', 
                                backgroundColor: theme.palette.secondary.main,
                                '&:hover': {
                                    background: theme.palette.secondary.dark,
                                }
                            }}
                        >
                            Agregar
                        </Button>
                    </Form> 
                </Formik>
                {
                    error && error.target === 'createNodeForm' &&
                    (
                        <Container disableGutters={true} sx={{mt: 3}}>
                            <Alert severity="error">
                                <AlertTitle>{`${error.code}`}</AlertTitle>
                                {`${error.message}`}
                            </Alert>
                        </Container>
                    )
                }
                {
                    feedback && feedback.target === 'createNodeForm' &&
                    (
                        <Container disableGutters={true} sx={{mt: 3}}>
                            <Alert severity="success">
                                <AlertTitle>Operacion exitosa!</AlertTitle>
                                <Typography>
                                    {`${feedback.message}`}
                                </Typography>
                            </Alert>
                        </Container>
                    )
                }
            </Box>
        </ClickAwayListener>
    )
}

export default FormNode