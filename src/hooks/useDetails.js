import { off, ref, onChildAdded } from 'firebase/database'
import { useEffect, useState, useMemo} from 'react'
import { database } from '../firebase'
import { useDispatch } from 'react-redux'
import { setHistoryError } from '../store/slices/nodeDetails'

export const useDetails = (id, current) => {
    const dispatch = useDispatch()
    const [loadingDetails, setLoadingDetails] = useState(true)
    const [nodeCurrentHistory, setNodeCurrentHistory] = useState({ data: [], time: [] })

    const histNodeRef = useMemo(() => ref(database, `nodos_hist/${id}`), [id]) 

    useEffect(() => {
        if(current){
            //dispatch(setHistoryError({code: 501, message: 'Test error', target: 'snack'}))
            onChildAdded(histNodeRef, data => {
                setLoadingDetails(false)
                setNodeCurrentHistory(prev => ({ data: [...prev.data, data.val()], time: [...prev.time, data.key] }))
            }, e => {
                dispatch(setHistoryError({code : e.code, message : e.message, target: 'snack'}))
            })
            console.log('listener on!')
        }
        else {
            setNodeCurrentHistory({ data: [], time: [] })
        }
        
        return (() => {
            off(histNodeRef)
            console.log('Liberando listener')
        })
    }, [setNodeCurrentHistory, dispatch, histNodeRef, current])

    return { nodeCurrentHistory, loadingCurrent: loadingDetails, setLoadingDetails }
}