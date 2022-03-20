import { useState, useEffect } from 'react';
import Expenses from "../Expenses/Expenses";
import NewExpense from "../Expenses/NewExpense";
import {useSearchParams} from 'react-router-dom'

const Dashboard = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [expenses, setExpenses] = useState(() => {
        // get user email from param
        const useremail = searchParams.get("user")
        // get data for the user email from Local Storage
        const data = localStorage.getItem(useremail)
        const jsonData = JSON.parse(data)
        return jsonData.expenses.map((value) => {
            return {
                id: value.id,
                title: value.title,
                amount: value.amount,
                date: new Date(value.date),
            }
        })
    });
    



    const addNewDataHandler =(expense) => {
        // await fetch('https://expensestracker-59e29-default-rtdb.firebaseio.com/expenseslist.json', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'aplication/json',
        //     },
        //     body: JSON.stringify(expense),
        // })
        const useremail = searchParams.get("user")
        const data = localStorage.getItem(useremail)
        const jsonData =  JSON.parse(data)
        jsonData.expenses.push(expense);
        localStorage.setItem(useremail, JSON.stringify(jsonData))
        setExpenses(jsonData.expenses)
    }

    return (<>    
        <NewExpense addNewDataHandler={addNewDataHandler} />
        <Expenses items={expenses} />
    </>
    )
}


export default Dashboard;