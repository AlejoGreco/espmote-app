import { off, ref, onChildAdded } from 'firebase/database'
import { useEffect, useState, useMemo} from 'react'
import { database } from '../firebase'

export const useDetails = (id, current) => {
    const [loadingDetails, setLoadingDetails] = useState(true)
    const [nodeCurrentHistory, setNodeCurrentHistory] = useState({ data: [], time: [] })

    const histNodeRef = useMemo(() => ref(database, `nodos_hist/${id}`), [id]) 

    useEffect(() => {
        if(current){
            onChildAdded(histNodeRef, data => {
                setLoadingDetails(false)
                setNodeCurrentHistory(prev => ({ data: [...prev.data, data.val()], time: [...prev.time, data.key] }))
            }, e => {
                /*({
                    error: {
                        code: e.message,
                        target: 'snack'
                    }, 
                    loading: false
                })*/
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
    }, [setNodeCurrentHistory, histNodeRef, current])

    return { nodeCurrentHistory, loadingCurrent: loadingDetails, setLoadingDetails }
}