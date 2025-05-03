import React from 'react';

const ExpenseTable = ({ expenses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Expense Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
