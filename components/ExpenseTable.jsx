import React from 'react';

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, description, amount, category }) => (
          <tr key={id}>
            <td>{description}</td>
            <td>{amount.toFixed(2)}</td>
            <td>{category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
