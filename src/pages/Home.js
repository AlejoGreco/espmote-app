import React, { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserNodeIds, setNodeData } from '../store/slices/nodes'
import { onValue, ref } from 'firebase/database'
import { database } from '../firebase'
import PageFrame from '../components/PageFrame'
import FormNode from '../components/FormNode'
import ListNodeContainer from '../components/ListNodeContainer'

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
                    let data = await snapshot.val()
                    console.log(data)
                    dispatch(setNodeData({...data, id : node.nodeId, name : node.name}))
                })
            })
        }
    },[dispatch, nodesId])

return (
    <PageFrame>
    <h2>Home</h2>
    <ListNodeContainer />
    <FormNode />
    </PageFrame>
)
}

export default Home