import { addExpenseUrl, addIncomeUrl, fetchExpenseUrl, fetchIncomeUrl } from "./urls"

export const addEntry=(entry)=>async(dispatch)=>{
    try {
       const response=await fetch(entry.entryType==="income"?addIncomeUrl:addExpenseUrl,{
        method:"POST",
        headers:{
  'Content-Type':'application/json'
        },
        body:JSON.stringify(entry)
       }) 
       const data=await response.json()
       if(data.success===true){
        console.log(data)
        dispatch({type:"ADD_ENTRY_SUCCESS",payload:data.data})
       }
    } catch (error) {
        console.log("Error adding entry: ",error)
    }
}
export const fetchExpense=()=>async(dispatch)=>{
try {
    const response=await fetch(fetchExpenseUrl)
    const data=await response.json()
    if(data){
        dispatch({type:"FETCH_EXPENSES_SUCCESS",payload:data})
    }
} catch (error) {
    console.log("Error fetching expenses: ",error)
}
}


export const fetchIncome=()=>async(dispatch)=>{
    try {
        const response=await fetch(fetchIncomeUrl)
        const data=await response.json()
        if(data){
            dispatch({type:"FETCH_INCOME_SUCCESS",payload:data})
        }
    } catch (error) {
        console.log("Error fetching income: ",error)
    }
    }