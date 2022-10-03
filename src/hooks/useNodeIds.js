import { useEffect }from 'react'
import { useSelector } from 'react-redux'
import { getUserNodeIds } from '../store/slices/nodes'

export const useNodeIds = dispatch => {
    const { id } = useSelector(state => state.userAuth)

    useEffect(() => {
        dispatch(getUserNodeIds(id))
    }, [dispatch, id])
}