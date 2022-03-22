import { Routes, Route } from 'react-router-dom'
import React, { createContext,useState } from "react"
import './style.css'
import Signup from './components/Login/Signup'
import Login from './components/Login/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard/Dashboard'
export const UserContext  = createContext()

function App() {
  const [currentUser,setCurrentUser] = useState('');


  return (
    <UserContext.Provider value={[currentUser,setCurrentUser]}>
      <Routes>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
     <Route path ='/' element={<Home/>}/>
     </Routes>
     </UserContext.Provider>
  )
}

export default App;
