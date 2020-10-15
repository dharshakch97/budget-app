import React from 'react';

const ExpenseList = () => {
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction history</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text">House rent</span>
                    <span className="transaction-amount">$2,000</span>
                    <button className="delete-btn">
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default ExpenseList;