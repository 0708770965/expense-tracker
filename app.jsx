import { useState } from 'react'
import './App.css'
import SearchBar from './searchbar.jsx'
import AddExpense from './addexpense.jsx'
import ExpenseTable from './expensetable.jsx'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Rent', description: 'rent', category: 'bill', amount: 1200, date: '2023-01-01' },
    { id: 2, name: 'Groceries', description: 'food stuff', category: 'bill', amount: 300, date: '2023-01-02' },
    { id: 3, name: 'Utilities', description: 'shopping', category: 'bill', amount: 150, date: '2023-01-03' },
    { id: 4, name: 'Transport', description: 'fuel', category: 'bill', amount: 100, date: '2023-01-04' },
    { id: 5, name: 'Entertainment', description: 'internet & tv', category: 'bill', amount: 200, date: '2023-01-05' }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <AddExpense onAddExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  )
}

export default App
