import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    incomeTransactions: [
        { id: 1, incomeText: "Salary", incomeAmount: 20000},
        { id: 2, incomeText: "Hike", incomeAmount: 5000},
        { id: 3, incomeText: "Sold items", incomeAmount: 3000}
    ],
    expenseTransactions: [
        { id: 1, expenseText: "Loan", expenseAmount: 5000},
        { id: 1, expenseText: "House works", expenseAmount: 1000},
        { id: 1, expenseText: "Travel cost", expenseAmount: 5000}
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}