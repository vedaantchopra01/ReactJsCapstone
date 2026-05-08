import React from 'react';

const Summary = ({ budget, totalSpent, remainingBalance, safeToSpend }) => {
  const savingsSuggestion = budget * 0.10;
  const sipSuggestion = budget * 0.10;
  const percentSpent = budget > 0 ? Math.min((totalSpent / budget) * 100, 100) : 0;

  return (
    <div className="card summary-card">
      <h2>Budget Summary</h2>
      
      <div className="summary-grid">
        <div className="summary-item">
          <p>Total Budget</p>
          <h3>₹{budget.toFixed(2)}</h3>
        </div>
        <div className="summary-item spent">
          <p>Total Spent</p>
          <h3>₹{totalSpent.toFixed(2)}</h3>
        </div>
        <div className="summary-item remaining">
          <p>Remaining Balance</p>
          <h3>₹{remainingBalance.toFixed(2)}</h3>
        </div>
      </div>

      {budget > 0 && (
        <div className="progress-container">
          <div className="progress-header">
            <span>Budget Usage</span>
            <span>{percentSpent.toFixed(1)}%</span>
          </div>
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ 
                width: `${percentSpent}%`,
                backgroundColor: percentSpent > 80 ? 'rgb(242, 166, 153)' : 'rgb(216, 168, 123)'
              }}
            ></div>
          </div>
          {safeToSpend < 0 ? (
            <p className="warning-text">You are dipping into your savings goal.</p>
          ) : (
            <p className="safe-spend-text">Safe to spend: <strong>₹{safeToSpend.toFixed(2)}</strong></p>
          )}
        </div>
      )}

      <div className="suggestions-box">
        <h3>Savings Planner</h3>
        <p>Suggested 20% allocation:</p>
        <ul>
          <li><strong>Bank Savings (10%):</strong> ₹{savingsSuggestion.toFixed(2)}</li>
          <li><strong>Investments (10%):</strong> ₹{sipSuggestion.toFixed(2)}</li>
        </ul>
      </div>
    </div>
  );
};

export default Summary;