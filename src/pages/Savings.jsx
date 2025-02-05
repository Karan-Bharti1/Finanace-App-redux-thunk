import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { useEffect } from "react";
import { fetchExpense, fetchIncome } from "../actions";

const Savings=()=>{
    const income=useSelector(state=>state.income)
    const expenses=useSelector(state=>state.expenses)
    const totalIncome=income?.reduce((acc,curr)=>acc+curr.amount,0)
    const totalExpenses=expenses?.reduce((acc,curr)=>acc+curr.amount,0)
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(fetchIncome())},[])
    useEffect(()=>{dispatch(fetchExpense())},[])
    const totalSavings=totalIncome-totalExpenses
    return(
        <>
        <Header/>
        <main className="container">
        <h1 >Savings Page</h1>
        <hr/>
       <h2>Total Savings: ${totalSavings}</h2>
        </main>
        
        </>
    )
}
export default Savings;