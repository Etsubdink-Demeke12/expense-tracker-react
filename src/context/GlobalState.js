import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Food", amount: -20 },
    { id: 2, text: "Salary", amount: 2000 },

    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Rent", amount: -1500 },
  ],
};
// createContext
export const GlobalContext = createContext(initialState);
// provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "Add-Transaction",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
