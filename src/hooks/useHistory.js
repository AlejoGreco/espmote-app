import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNodeHistory, setHistoryLoaded } from '../store/slices/nodeDetails'

export const useHistory = (id, period) => {
    const dispatch = useDispatch()
    const { loading, nodeHistory } = useSelector(state => state.nodeDetails)
    const realNodeHistory = nodeHistory[id] ? nodeHistory[id] : false
    const realPeriodHistory = realNodeHistory[period] ? realNodeHistory[period] : false

    useEffect(() => {
        if(!realPeriodHistory && period !== 'current'){
            dispatch(getNodeHistory({nodeId: id, period}))
        }
        else if(realPeriodHistory && period !== 'current'){
            dispatch(setHistoryLoaded())
        }
    }, [dispatch, period, id, realPeriodHistory])

    return { loadingHistory: loading, nodeHistory: realPeriodHistory }
}