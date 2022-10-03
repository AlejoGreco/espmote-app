import { Routes, Route } from 'react-router-dom'
import { useUserAuth } from './hooks/useUserAuth';
import { useNodeIds } from './hooks/useNodeIds';
import { useNodeData } from './hooks/useNodeData';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import ProtectRoute from './components/ProtectRoute';
import Membresy from './pages/Membresy';
import Profile from './pages/Profile';
import ResetPass from './pages/ResetPass';
import { ThemeProvider } from '@mui/system';
import theme from './themes/berry'
import Alarms from './pages/Alarms';

function App() {     
    useUserAuth()
    useNodeIds()
    useNodeData()

    return (
        <ThemeProvider theme={theme({})}>
        <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/home' element={<ProtectRoute><Home /></ProtectRoute>}/>
            <Route path='/alarms' element={<ProtectRoute><Alarms /></ProtectRoute>}/>
            <Route path='/membresy' element={<ProtectRoute><Membresy /></ProtectRoute>}/>
            <Route path='/profile' element={<ProtectRoute><Profile /></ProtectRoute>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/resetpass' element={<ResetPass />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
        </ThemeProvider>
    );
    }

    export default App;
