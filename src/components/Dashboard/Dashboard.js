import { useState, useEffect, useContext } from 'react';
import Expenses from "../Expenses/Expenses";
import NewExpense from "../Expenses/NewExpense";
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const useremail = useContext(UserContext)[0]
    const navigate = useNavigate()
    //let [searchParams, setSearchParams] = useSearchParams();
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        if (!useremail || useremail === "") {
            navigate('/login')
        }
        const data = localStorage.getItem(useremail)
        if (!data) {
            return
        }
        const jsonData = JSON.parse(data)
        if (!jsonData.expenses) {
            return
        }
        const newState = jsonData.expenses.map((value) => {
            return {
                id: value.id,
                title: value.title,
                amount: value.amount,
                date: new Date(value.date),
            }
        })
        setExpenses(newState)
    }, [])

    const addNewDataHandler = (expense) => {

        // const useremail = searchParams.get("user")
        const data = localStorage.getItem(useremail)
        const jsonData = JSON.parse(data)
        jsonData.expenses.push(expense);
        localStorage.setItem(useremail, JSON.stringify(jsonData))
        setExpenses(jsonData.expenses.map((value) => {
            return {
                id: value.id,
                title: value.title,
                amount: value.amount,
                date: new Date(value.date),
            }
        }))
    }

    return (<>

            <NewExpense addNewDataHandler={addNewDataHandler} />
            <Expenses items={expenses} />

    </>
    )
}


export default Dashboard;