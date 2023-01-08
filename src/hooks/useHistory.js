import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNodeHistory } from '../store/slices/nodeDetails'

export const useHistory = (id, period) => {

    //const histNodeRef = useMemo(() => ref(database, `nodos_hist/${id}`), [id])
    const dispatch = useDispatch()
    const { loading, nodeHistory } = useSelector(state => state.nodeDetails)
    const realNodeHistory = nodeHistory[id] ? nodeHistory[id] : false
    const realPeriodHistory = realNodeHistory[period] ? realNodeHistory[period] : false

    useEffect(() => {
        if(!realPeriodHistory && period !== 'current'){
            //realizo peticion
            console.log(`Realizando peticion de historico node: ${id} | period: ${period}`)
            dispatch(getNodeHistory({nodeId: id, period}))
        }
    }, [dispatch, period])

    return { loadingHistory: loading, nodeHistory: realPeriodHistory }
}