import React from 'react'
import { Avatar, Box, Button, Container, Typography, Alert, AlertTitle } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNode } from '../store/slices/nodes';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import WpTextField from './WpTextField';

const FormNode = () => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.userAuth.id)
    const { error, feedback, nodesId } = useSelector(state => state.nodes)

    const theme = createTheme()

    const initialValues = {
        nodeId : '',
        name : ''
    }

    const schema = Yup.object().shape({
        nodeId : Yup.string().min(6, 'El id debe tener al menos 6 caracteres').required('Complete el id del nodo que desea agregar'),
        name : Yup.string().min(3, 'El Nombre debe tener al menos 3 caracteres').required('Complete el nombre del nodo que desea agregar')
    })

    const handleSubmit = values => {
        dispatch(addNewNode({node : { nodeId : values.nodeId, name : values.name }, userId : id, index : nodesId.length}))
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Agregar nuevo nodo
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Box sx={{ mt: 1 }}>
                                <WpTextField
                                    id="nodeId"
                                    name="nodeId"
                                    label="Id del nodo"
                                    placeholder='xxxxxxxx'
                                    margin="normal"
                                />
                                <WpTextField
                                    id="name"
                                    name="name"
                                    label="Nombre del nodo"
                                    placeholder='Nodo sector A'
                                    margin="normal"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Agregar
                                </Button>
                            </Box>
                        </Form> 
                    </Formik>
                    {
                        error && 
                        (
                            <Container disableGutters={true} sx={{my: 4}}>
                                <Alert severity="error">
                                    <AlertTitle>{`${error.code}`}</AlertTitle>
                                    {`${error.message}`}
                                </Alert>
                            </Container>
                        )
                    }
                    {
                        feedback && 
                        (
                            <Container disableGutters={true} sx={{my: 4}}>
                                <Alert severity="success">
                                    <AlertTitle>Operacion exitosa!</AlertTitle>
                                    <Typography>
                                        {`${feedback.message}`}<br/>
                                        {/*<Link component={RouterLink} to='/home'><strong>Regresar al home</strong></Link>*/}
                                    </Typography>
                                </Alert>
                            </Container>
                        )
                    }
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default FormNode