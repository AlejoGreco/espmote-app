import { useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserNodeIds } from '../store/slices/nodes'

export const useNodeIds = () => {
    const dispatch = useDispatch()
    const { id } = useSelector(state => state.userAuth)

    useEffect(() => {
        if(id !== '')
            dispatch(getUserNodeIds(id))
    }, [dispatch, id])
}