import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = (props) => {


  const [filteredYear, onChangeFilterfunc] = useState('2022')
  const handleFilterChange = (selectedYear) => {
    onChangeFilterfunc(selectedYear);
  }
  const filteredExpenses = props.items.filter((item) => item.date.getFullYear() == filteredYear)
  return (

    <div className="expenses">
      <div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilterChange} />
      </div>
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.map(expense =>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />)}


    </div>
  )
}
export default Expenses;