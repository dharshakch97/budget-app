import React from 'react';

const IncomeList = () => {
    return (
        <div className="transactions transactions-income">
            <h2>Transaction history</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text">Salary</span>
                    <span className="transaction-amount">$20,000</span>
                    <button className="delete-btn">
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default IncomeList;