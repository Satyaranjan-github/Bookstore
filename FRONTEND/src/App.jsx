import React  from 'react'
import Home from './Home/Home'
import {Navigate,Routes, Route} from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Contacts from './Contacts/Contacts'
import CART from './CART/CART'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Abouts from './Abouts/Abouts'

const App = () => {
  const [authUser, setAuthUser] = useAuth();

  
  return (
    <>
  <div>
  <Routes>
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser? <Courses />:<Navigate to='/signup'/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/about' element={<Abouts/>}/>
      <Route path='/mycart' element={authUser? <CART/>:<Navigate to='/signup'/>}/>
    </Route>
  </Routes>
  <Toaster/>
  </div>
    </>
  )
}

export default App
