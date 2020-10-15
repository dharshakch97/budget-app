import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import IncomeTransaction from './incomeTransaction';

const IncomeList = () => {
    const { incomeTransactions } = useContext(GlobalContext);
    console.log(incomeTransactions);
    return (
        <div className="transactions transactions-income">
            <h2>Transaction history</h2>
            <ul className="transaction-list">
                { incomeTransactions.map(incomeTransactions => (
                    <IncomeTransaction key={incomeTransactions.id} incomeTransactions={incomeTransactions} />
                ))}
            </ul>
        </div>
    )
}

export default IncomeList;