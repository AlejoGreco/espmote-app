import { off, ref, onChildAdded } from 'firebase/database'
import { useEffect, useState, useMemo} from 'react'
import { database } from '../firebase'

export const useDetails = id => {
    const [status, setStatus] = useState({loading: true, error: null})
    const [nodeHistory, setNodeHistory] = useState({ data: [], time: [] })

    const histNodeRef = useMemo(() => ref(database, `nodos_hist/${id}`), [id]) 

    useEffect(() => {
        onChildAdded(histNodeRef, data => {
            console.log(data.val())
            console.log(data.key)
            setStatus(prev => ({...prev, loading: false}))
            setNodeHistory(prev => ({ data: [...prev.data, data.val()], time: [...prev.time, data.key] }))
        }, e => {
            setStatus({
                error: {
                    code: e.message,
                    target: 'snack'
                }, 
                loading: false
            })
        })
        console.log('listener on!')

        /*get(histNodeRef).then(snapshot => {
            setNodeHistory({ data: Object.values(snapshot.val()), time: Object.keys(snapshot.val()) }) 
        })*/
        
        return (() => {
            off(histNodeRef)
            console.log('Liberando listener')
        })
    }, [setNodeHistory, histNodeRef, setStatus])

    return { nodeHistory, loading: status.loading, error: status.error }
}