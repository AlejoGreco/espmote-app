import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserNodeIds } from '../store/slices/nodes'

const ListNodeContainer = () => {

    const dispatch = useDispatch()
    const { nodesId, loading } = useSelector(state => state.nodes)
    const { id } = useSelector(state => state.userAuth)

    useEffect(() => {
        dispatch(getUserNodeIds(id))
    }, [dispatch, id])

    if(loading)
        return <h2>Cargando ... </h2>

    if(nodesId.length === 0)
        return <h2>No hay nodos dados de alta</h2>
    
    return (
        <div>
            <h3>Nodos</h3>
            {
                nodesId.map(n => <p>{`Id: ${n}`}</p>)
            }
        </div>
    )
}

export default ListNodeContainer