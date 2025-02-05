import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../actions";

const NewEntry=()=>{
    const [successMessage,setSuccessMessage]=useState("")
    const [entry,setEntry]=useState({
        description:"",
        amount:"",
        entryType:""
    })
    const dispatch=useDispatch()
    const handleChange=(key,value)=>{
        setEntry(entry=>(key==="amount"?{...entry,amount:parseFloat(value)}:{...entry,[key]:value}))
    }
    const handleAddEntry=e=>{
        e.preventDefault()
        dispatch(addEntry(entry))
        setEntry(()=>({ description:"",
        amount:"",
        entryType:""}))
        setSuccessMessage("Entry Updated")
        setTimeout(()=>setSuccessMessage(""),1500)
    }
    
    return(
        <main className="container my-3">
            <h2>New Entry Page</h2>
            <form>
<label htmlFor="description">Description:</label>
        <input type="text" id="description" onChange={event=>handleChange("description",event.target.value)} className="form-control"/>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" onChange={event=>handleChange("amount",event.target.value)} className="form-control"/>
        <label htmlFor="type">Entry Type:</label>
        <select className="form-control" onChange={event=>handleChange("entryType",event.target.value)}>
            <option value="">Select Field</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
        </select>
        <button  className="btn btn-primary my-2" onClick={handleAddEntry}>Add Entry</button>
        </form>
        <h2>{successMessage}</h2>
        </main>
    )
}
export default NewEntry;