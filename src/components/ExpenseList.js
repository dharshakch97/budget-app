import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransaction from './expenseTransaction';

const ExpenseList = () => {
    const { expenseTransactions } = useContext(GlobalContext);
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction history</h2>
            <ul className="transaction-list">
                {expenseTransactions.map(expenseTransactions => (
                    <ExpenseTransaction key={expenseTransactions.id} expenseTransactions={expenseTransactions} />
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList;