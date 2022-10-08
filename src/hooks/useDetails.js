import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getNodeHistory } from '../store/slices/nodeDetails/thunks'

export const useDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const thereIsdata = useSelector(state => state.nodeDetails.nodeHistoryTime)[id]

    useEffect(() => {
        if(!thereIsdata){
            dispatch(getNodeHistory(id))
        }
    }, [dispatch, id, thereIsdata])

    return { id }
}