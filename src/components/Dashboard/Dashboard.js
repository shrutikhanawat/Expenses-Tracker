import { useState, useEffect } from 'react';
import Expenses from "../Expenses/Expenses";
import NewExpense from "../Expenses/NewExpense";

const Dashboard = () => {

    const [expenses, setExpenses] = useState([]);

    const addNewDataHandler = async (expense) => {
        await fetch('https://expensestracker-59e29-default-rtdb.firebaseio.com/expenseslist.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify(expense),
        })
    }

    useEffect(async () => {
        const response = await fetch('https://expensestracker-59e29-default-rtdb.firebaseio.com/expenseslist.json')
        const data = await response.json()
        let convertedData = Object.keys(data).map((key) => {
            return {
                id: data[key].id,
                title: data[key].title,
                amount: data[key].amount,
                date: new Date(data[key].date),
            }
        })
        setExpenses(convertedData)
    }, [expenses])

    return (<>    
        <NewExpense addNewDataHandler={addNewDataHandler} />
        <Expenses items={expenses} />
    </>
    )
}


export default Dashboard;