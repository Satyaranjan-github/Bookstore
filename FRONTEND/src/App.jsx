import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import Abouts from './Abouts/Abouts'
import CART from './CART/CART'
import Checkouts from './Checkouts/Checkouts'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Contacts from './Contacts/Contacts'
import { useAuth } from './context/AuthProvider'
import Courses from './Courses/Courses'
import Home from './Home/Home'
import NetworkStatusChecker from './hooks/useNetworkStatus'
import Profiles from './Profiles/Profiles'

const App = () => {
  const [authUser, setAuthUser] = useAuth();


  return (
    <>
      <NetworkStatusChecker />
      <div>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/course' element={authUser ? <Courses /> : <Navigate to='/signup' />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contacts />} />
            <Route path='/about' element={<Abouts />} />
            <Route path='/mycart' element={authUser ? <CART /> : <Navigate to='/signup' />} />
            <Route path='/checkout' element={authUser ? <Checkouts /> : <Navigate to='/signup' />} />
            <Route path='/profile' element={<Profiles />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
