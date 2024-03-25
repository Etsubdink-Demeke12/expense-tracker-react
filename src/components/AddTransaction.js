import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add new transaction</h3>

      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Reason</label>
          <input
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description ..."
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount<br></br>(Negative - Expense, Positive - Income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount ..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
