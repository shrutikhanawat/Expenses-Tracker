 import './NewExpense.css';
 import ExpenseForm from './ExpenseForm';
import { useState } from 'react'
 const NewExpense = (props)=>{
  const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = ()=>{
        setIsEditing (true)
    }
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    return <div className='new-expense'>
     {!isEditing && <button onClick ={startEditingHandler}>Add New Expense</button> }
    {isEditing && <ExpenseForm addNewDataHandler={props.addNewDataHandler} onCancel ={stopEditingHandler}/>}
    </div>
}
export default NewExpense;