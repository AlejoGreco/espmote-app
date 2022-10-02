import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDrawerVisibility } from '../store/slices/ui';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export const useDrawer = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg')) 

    useEffect(() => {        
        if(matchesSM){
            dispatch(setDrawerVisibility(false))
        }

    }, [dispatch, matchesSM])
    
    return {matchUpMd, theme}
}