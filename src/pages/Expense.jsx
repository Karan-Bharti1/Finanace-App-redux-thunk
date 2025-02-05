import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { useEffect } from "react";
import { fetchExpense } from "../actions";

const Expense=()=>{
    const expenses=useSelector(state=>state.expenses)
    const totalExpenses=expenses?.reduce((acc,curr)=>acc+curr.amount,0)
    const dispatch=useDispatch()
useEffect(()=>{
    dispatch(fetchExpense())
},[dispatch])
    return(
        <>
        <Header/>
        <main className="container">
        <h1>Expense Page</h1>
        <ul className="list-group">
            {expenses.map((expense,index)=><li key={index} className="list-group-item">{expense.description}: ${expense.amount}</li>)}
        </ul>
        <hr/>
      { expenses.length>0 && <h2>Total Expenses: ${totalExpenses}</h2>}
        </main>
        </>
    )
}
export default Expense;