import { Routes, Route } from 'react-router-dom'
import { useUserAuth } from './hooks/useUserAuth';
import { useNodeIds } from './hooks/useNodeIds';
import { useNodeData } from './hooks/useNodeData';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import ProtectRoute from './components/ProtectRoute';
import Membresy from './pages/Membresy';
import Profile from './pages/Profile';
import { ThemeProvider } from '@mui/system';
import theme from './themes/berry'
import Alarms from './pages/Alarms';
import NodeDetails from './pages/NodeDetails';

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
            <Route path='/node/:id' element={<ProtectRoute><NodeDetails /></ProtectRoute>}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
        </ThemeProvider>
    );
    }

    export default App;
