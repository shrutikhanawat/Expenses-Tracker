import { Routes, Route } from 'react-router-dom'
import React from "react"
import { Fragment, useState, useEffect } from 'react'
import Expenses from './components/Expenses/Expenses'
import './style.css'
import NewExpense from './components/Expenses/NewExpense'

function App() {

  const [expenses, setExpenses] = useState([]);

  const addNewDataHandler = async (expense) => {
    // localStorage.setItem('expenses', JSON.stringify(expenses));
    await fetch('https://expensestracker-59e29-default-rtdb.firebaseio.com/expenseslist.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify(expense),
    })
  }
 useEffect(async () => {
    // fetch('https://expensestracker-59e29-default-rtdb.firebaseio.com//expenseslist.json')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     const convertedData = Object.keys(data).map((key) => {
    //       return {
    //         id: data[key].id,
    //         title: data[key].title,
    //         amount: data[key].amount,
    //         date: new Date(data[key].date),
    //       }
    //     })
    //     setExpenses(convertedData)


    //   })
     const response = await fetch('https://expensestracker-59e29-default-rtdb.firebaseio.com/expenseslist.json')
     const data =  await response.json()
      let convertedData = Object.keys(data).map((key) => {
        return {
          id: data[key].id,
          title: data[key].title,
          amount: data[key].amount,
          date: new Date(data[key].date),
        }})
      setExpenses(convertedData)
  }, [expenses])





  return (
    <Fragment>
      <NewExpense addNewDataHandler={addNewDataHandler} />

      <Expenses items={expenses} />
    </Fragment>)
}

export default App;
