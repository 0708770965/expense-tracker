import React, { useState } from 'react'
import './App.css'

const AddExpense = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setExpense((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      expense.name &&
      expense.description &&
      expense.category &&
      expense.amount &&
      expense.date
    ) {
      onAddExpense({
        name: expense.name,
        description: expense.description,
        category: expense.category,
        amount: parseFloat(expense.amount),
        date: expense.date
      })
      setExpense({
        name: '',
        description: '',
        category: '',
        amount: '',
        date: ''
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-expense-form">
      <input
        type="text"
        name="name"
        placeholder="Enter Expense Name"
        value={expense.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Enter Expense Description"
        value={expense.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Enter Expense Category"
        value={expense.category}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Enter Expense Amount"
        value={expense.amount}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        placeholder="Enter Expense Date"
        value={expense.date}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default AddExpense
