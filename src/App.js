import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { setLogin, setLogout } from './store/slices/auth';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import ProtectRoute from './components/ProtectRoute';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    
    onAuthStateChanged(auth, user => {
      if(user){
        dispatch(setLogin({userId : user.uid, email : user.email}))
        navigate('/home')
      }
      else
        dispatch(setLogout())
    })
  
  }, [dispatch, navigate])
  
  return (
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/home' element={<ProtectRoute><Home /></ProtectRoute>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/subscript' element={<NotFound />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
}

export default App;
