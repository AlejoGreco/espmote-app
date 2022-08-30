import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserNodeIds, setListener, setNodeData, setLoaded } from '../store/slices/nodes'
import NodesTable from './NodesTable'
import { onValue, ref } from 'firebase/database'
import { database } from '../firebase'

const ListNodeContainer = () => {

    const dispatch = useDispatch()
    const { nodesId, loading, nodesData } = useSelector(state => state.nodes)
    const { id } = useSelector(state => state.userAuth)

    useEffect(() => {
        dispatch(getUserNodeIds(id))
    }, [dispatch, id])

    useEffect(() => {
        if(nodesId.length){
            dispatch(setListener())

            nodesId.forEach(node => {
                const starCountRef = ref(database, `nodos/${node.nodeId}`)
                onValue(starCountRef, async snapshot => {
                    const data = await snapshot.val()
                    console.log(data)
                    dispatch(setNodeData({...data, id : node.nodeId}))
                })
            })

            dispatch(setLoaded())
        }
        
    },[dispatch, nodesId])

    if(loading)
        return <h2>Cargando ... </h2>

    if(nodesId.length === 0)
        return <h2>No hay nodos dados de alta</h2>
    
    return (
        <div>
            <h3>Nodos</h3>
            <NodesTable nodos={nodesData}/>
        </div>
    )
}

export default ListNodeContainer