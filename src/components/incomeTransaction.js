import React from 'react';

const IncomeTransaction = ({ incomeTransactions }) => {
    return (
        <li className="transaction">
            <span className="transaction-text">
                {incomeTransactions.incomeText}
            </span>
            <span className="transaction-amount">$
                {incomeTransactions.incomeAmount}
            </span>
            <button className="delete-btn">
                <i className="fas fa-trash"></i>
            </button>
        </li>
    )
};

export default IncomeTransaction;