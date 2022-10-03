import { useEffect }from 'react'
import { useSelector } from 'react-redux'
import { setNodeData } from '../store/slices/nodes'
import { onValue, ref } from 'firebase/database'
import { database } from '../firebase'

export const useNodeData = dispatch => {
    const { nodesId } = useSelector(state => state.nodes)

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
}
