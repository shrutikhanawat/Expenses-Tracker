import { Routes, Route } from 'react-router-dom'
import React from "react"
import { Fragment, useState, useEffect } from 'react'
import Expenses from './components/Expenses/Expenses'
import './style.css'
import NewExpense from './components/Expenses/NewExpense'
import axios from 'axios';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const getDatafromLS = () => {
  const data = localStorage.getItem('expenses');

  if (data) {
    let jsonData = JSON.parse(data);
    jsonData.map((v,i) => {
      v.date = new Date(v.date)
      return v
    })
    return jsonData
  }
  else {
    return []
  }
}

function App() {

  const [expenses, setExpenses] = useState(getDatafromLS());

  const addNewDataHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  }
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])


  return (
    <Fragment>
      <NewExpense addNewDataHandler={addNewDataHandler} />

      <Expenses items={expenses} />
    </Fragment>)
}

export default App
