import React, { useState } from 'react';
import Summary from './Summary';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './index.css';

const App = () => {
  const [budgetInput, setBudgetInput] = useState('');
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBalance = budget - totalSpent;
  const safeToSpend = budget - (budget * 0.20) - totalSpent;

  const handleSetBudget = (e) => {
    e.preventDefault();
    if (budgetInput > 0) {
      setBudget(parseFloat(budgetInput));
    }
  };

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="App">
      <div className="dashboard-container">
        <header className="header">
          <h1>Finance Tracker</h1>
          <p>Manage your pocket money and build savings habits</p>
        </header>
        
        <div className="card setup-card">
          <h2>Setup Monthly Budget</h2>
          <form onSubmit={handleSetBudget} className="budget-form">
            <input 
              type="number" 
              placeholder="Enter budget (₹)" 
              value={budgetInput}
              onChange={(e) => setBudgetInput(e.target.value)}
            />
            <button type="submit" className="btn-primary">Set Budget</button>
          </form>

          {budget > 0 && (
            <div className="quick-stats">
              <p>Target Savings (20%): <strong>₹{(budget * 0.20).toFixed(2)}</strong></p>
            </div>
          )}
        </div>

        <div className="dashboard-content">
          <div className="left-column">
            <Summary 
              budget={budget} 
              totalSpent={totalSpent} 
              remainingBalance={remainingBalance}
              safeToSpend={safeToSpend}
            />
          </div>
          
          <div className="right-column">
            <ExpenseForm onAddExpense={handleAddExpense} />
            <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;