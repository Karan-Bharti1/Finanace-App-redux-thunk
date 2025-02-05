import {NavLink} from "react-router-dom";
const Header=()=>{
return(
    <header className="bg-dark text-light py-3">
        <div className="container">
        <h2>Finance Management</h2>
          <nav >
   <ul className="nav">
    <li>
       <NavLink to="/income" className="nav-link">Income</NavLink>
     </li>
      <li>
        <NavLink to="/expenses" className="nav-link">Expense</NavLink>
       </li>
       <li>
         <NavLink to="/savings" className="nav-link">Savings</NavLink>
       </li>
       <li>
         <NavLink to="/" className="nav-link">New Entries</NavLink>
        </li>
     </ul>
  </nav>
  </div>
    </header>
)
}
export default Header;