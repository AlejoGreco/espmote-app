import React, { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserNodeIds, setNodeData } from '../store/slices/nodes'
import { onValue, ref } from 'firebase/database'
import { database } from '../firebase'
import { Grid } from '@mui/material'
import PageFrame from '../components/PageFrame'
import FormNode from '../components/FormNode'
import ListNodeContainer from '../components/ListNodeContainer'
import AlarmNoteCard from '../components/cards/AlarmNoteCard'

const Home = () => {
    const dispatch = useDispatch()
    const { id } = useSelector(state => state.userAuth)
    const { nodesId } = useSelector(state => state.nodes)

    useEffect(() => {
        dispatch(getUserNodeIds(id))
    }, [dispatch, id])

    useEffect(() => {
        if(nodesId.length){
            nodesId.forEach(node => {
                const starCountRef = ref(database, `nodos/${node.nodeId}`)
                onValue(starCountRef, async snapshot => {
                    const values = await snapshot.val()
                    if(values)
                    {
                        const {type, ...data} = values
                        dispatch(setNodeData({id : node.nodeId, type, name : node.name, data}))
                    }
                    else{
                        dispatch(setNodeData({id : node.nodeId, type: undefined, name : node.name, data: undefined}))
                    }
                })
            })
        }
    },[dispatch, nodesId])

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