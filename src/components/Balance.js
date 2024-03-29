import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);
    const incomeAmounts = incomeTransactions.map(
        it => it.incomeAmount
    );
    const expenseAmounts = expenseTransactions.map(
        et => et.expenseAmount
    );

    const totalIncome = incomeAmounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const totalExpenses = expenseAmounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    
    return (
        <div className="balance">
            <h2>Your balance:</h2>
            <h3>$ {totalIncome - totalExpenses}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Exxpense</h3>
                    <p>-${totalExpenses}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance;