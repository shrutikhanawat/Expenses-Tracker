import { Routes, Route } from 'react-router-dom'
import React from "react"
import { Fragment, useState, useEffect } from 'react'
import Expenses from './components/Expenses/Expenses'
import './style.css'
import NewExpense from './components/Expenses/NewExpense'
import Signup from './components/Login/Signup'
import Login from './components/Login/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <Fragment>
   
   <Routes>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/dashboard'element={<Dashboard/>}/>
     <Route path ='/' element={<Home/>}/>
     </Routes>
     
    </Fragment>)
}

export default App;
