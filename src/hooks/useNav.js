import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { setMenuItem } from '../store/slices/ui'

export const useNav = item => {
    const theme = useTheme();
    const selected = useSelector(state => state.ui.menuItemSelected)
    const dispatch = useDispatch()
    const { pathname } = useLocation()

    useEffect(() => {
        const res = pathname.endsWith(item.id)
        if(res){
            dispatch(setMenuItem(item.id))            
        }
    }, [dispatch, pathname, item])

    return {selected, dispatch, theme}
}