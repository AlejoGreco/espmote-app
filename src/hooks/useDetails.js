import { off, ref, onChildAdded } from 'firebase/database'
import { useEffect, useState, useMemo} from 'react'
import { database } from '../firebase'

export const useDetails = (id, current) => {
    const [status, setStatus] = useState({loading: true, error: null})
    const [nodeCurrentHistory, setNodeCurrentHistory] = useState({ data: [], time: [] })

    const histNodeRef = useMemo(() => ref(database, `nodos_hist/${id}`), [id]) 

    useEffect(() => {
        if(current){
            onChildAdded(histNodeRef, data => {
                //console.log(data.val())
                //console.log(data.key)
                setStatus(prev => ({...prev, loading: false}))
                setNodeCurrentHistory(prev => ({ data: [...prev.data, data.val()], time: [...prev.time, data.key] }))
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
        }
        /*get(histNodeRef).then(snapshot => {
            setNodeHistory({ data: Object.values(snapshot.val()), time: Object.keys(snapshot.val()) }) 
        })*/
        
        return (() => {
            off(histNodeRef)
            console.log('Liberando listener')
        })
    }, [setNodeCurrentHistory, histNodeRef, setStatus, current])

    return { nodeCurrentHistory, loadingCurrent: status.loading, error: status.error }
}