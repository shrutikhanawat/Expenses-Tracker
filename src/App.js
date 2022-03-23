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
     <Route path='/Expenses-Tracker/signup' element={<Signup/>}/>
     <Route path='/Expenses-Tracker/login' element={<Login/>}/>
      <Route path='/Expenses-Tracker/dashboard'element={<Dashboard/>}/>
     <Route path ='/Expenses-Tracker/' element={<Home/>}/>
     </Routes>
     </UserContext.Provider>
  )
}

export default App;
