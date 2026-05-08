import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !amount) {
      setError('Please fill in both fields.');
      return;
    }
    
    if (amount <= 0) {
      setError('Amount must be greater than zero.');
      return;
    }

    onAddExpense({
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount)
    });

    setTitle('');
    setAmount('');
    setError('');
  };

  return (
    <div className="card">
      <h2>Add New Expense</h2>
      {error && <p className="error-text">{error}</p>}
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label>Expense Title</label>
          <input 
            type="text" 
            placeholder="e.g., Groceries" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Amount (₹)</label>
          <input 
            type="number" 
            placeholder="e.g., 500" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;