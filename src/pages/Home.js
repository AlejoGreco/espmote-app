import React from 'react'
import { Grid } from '@mui/material'
import PageFrame from '../components/PageFrame'
import FormNode from '../components/FormNode'
import ListNodeContainer from '../components/ListNodeContainer'
import AlarmNoteCard from '../components/cards/AlarmNoteCard'

const Home = () => {

    return (
        <PageFrame>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={9}>
                    <ListNodeContainer />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={3}>
                    <Grid container justifyContent='space-around' spacing={3}>
                        <Grid item xs={12} sm={8} md={5} lg={12} xl={12}>
                            <AlarmNoteCard />
                        </Grid>
                        <Grid item xs={12} sm={8} md={5} lg={12} xl={12}>
                            <FormNode />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PageFrame>
    )
}

export default Home