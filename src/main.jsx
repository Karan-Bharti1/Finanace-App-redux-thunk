import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Expense from './pages/Expense.jsx'
import Savings from './pages/Savings.jsx'
import Income from './pages/Income.jsx'
const router=createBrowserRouter([
 {path:"/" ,
 element:<App/>},
 {
  path:"/expenses",
  element:<Expense/>
 },{
  path:"/income",
  element:<Income/>
 },
 {
  path:"/savings",
  element:<Savings/>
 }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
