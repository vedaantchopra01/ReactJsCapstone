import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="card">
      <h2>Expense List</h2>
      
      {expenses.length === 0 ? (
        <p className="empty-message">No expenses added yet.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              <div className="expense-info">
                <span className="expense-title">{expense.title}</span>
                <span className="expense-amount">₹{expense.amount.toFixed(2)}</span>
              </div>
              <button onClick={() => onDeleteExpense(expense.id)} className="btn-delete">X</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;