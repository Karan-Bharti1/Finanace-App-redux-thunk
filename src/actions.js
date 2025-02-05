import { addExpenseUrl, addIncomeUrl } from "./urls"

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