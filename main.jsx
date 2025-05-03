import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddExpense from './addexpense.jsx'
import ExpenseTable from './expensetable.jsx'
import SearchBar from './searchbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)