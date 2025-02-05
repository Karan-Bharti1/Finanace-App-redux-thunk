import { useState } from "react";

const NewEntry=()=>{
    const {entry,setEntry}=useState({
        description:"",
        amount:"",
        entryType:""
    })
    const handleChange=(key,value)=>{
        setEntry({...entry,[key]:value})
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
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </select>
        <button  className="btn btn-primary my-2" type="submit">Add Entry</button>
        </form>
        </main>
    )
}
export default NewEntry;