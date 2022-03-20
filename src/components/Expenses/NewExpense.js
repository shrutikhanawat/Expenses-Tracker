 import './NewExpense.css';
 import ExpenseForm from './ExpenseForm';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
 const NewExpense = (props)=>{
    const navigate = useNavigate()

  const [isEditing, setIsEditing] = useState(false)


    const startEditingHandler = ()=>{
        setIsEditing (true)
    }
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
   

    return <div className='new-expense'>
        <div><span>{}</span></div>
     {!isEditing && <button onClick ={startEditingHandler}>Add New Expense</button> }
    {isEditing && <ExpenseForm addNewDataHandler={props.addNewDataHandler} onCancel ={stopEditingHandler}/>}
    <button onClick ={()=>{navigate('/login')}}>Logout</button>

   

    </div>
}
export default NewExpense;