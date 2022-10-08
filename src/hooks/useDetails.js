import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getNodeHistory } from '../store/slices/nodeDetails/thunks'

export const useDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    //const thereIsdata = useSelector(state => state.nodeDetails.nodeHistoryTime)[id]
    const { nodeHistoryTime, loading } = useSelector(state => state.nodeDetails)

    useEffect(() => {
        if(!nodeHistoryTime[id]){
            dispatch(getNodeHistory(id))
        }
    }, [dispatch, id, nodeHistoryTime])

    return { id, loading }
}