import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
//import { onAuthStateChanged } from 'firebase/auth';
//import { auth } from './firebase';
//import { setLogin, setLogout, startLoad } from './store/slices/auth';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import ProtectRoute from './components/ProtectRoute';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    /*dispatch(startLoad())
    onAuthStateChanged(auth, user => {
      if(user)
        dispatch(setLogin({userId : user.uid, email : user.email}))
      else
        dispatch(setLogout())
    })*/
  
  }, [dispatch])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/home' element={<ProtectRoute><Home /></ProtectRoute>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/subscript' element={<NotFound />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
