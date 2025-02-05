import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { useEffect } from "react";
import { fetchIncome } from "../actions";

const Income=()=>{
    const income=useSelector(state=>state.income)
    const totalIncome=income?.reduce((acc,curr)=>acc+curr.amount,0)
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(fetchIncome())},[])
    return(
        <>
        <Header/>
        <main className="container">
        <h1 >Income Page</h1>
        <ul className="list-group">
{income.map((salary,index)=><li key={index} className="list-group-item">{salary.description}: ${salary.amount}</li>)}
        </ul>
        <hr/>
      {Array.isArray(income)&& income.length>0 &&  <h2>Total Income: ${totalIncome}</h2>}
        </main>
        
        </>
    )
}
export default Income;