import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // document.getElementById('').addEventListener('click', (event) => {}) // In vanilla JS, we receive an event containing what occurred

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //   const [input, setInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  // not recommended
  //   const titleChangedHandler = (event) => {
  //     setInput({
  //       ...input,
  //       enteredTitle: event.target.value
  //     });
  //   };
  //   const amountChangedHandler = (event) => {
  //     setInput({
  //       ...input,
  //       enteredAmount: event.target.value
  //     });
  //   };
  //   const dateChangedHandler = (event) => {
  //     setInput({
  //       ...input,
  //       enteredDate: event.target.value
  //     });
  //   };

  //   const titleChangedHandler = (event) => {
  //     setInput((prevState) => ({
  //       ...prevState,
  //       enteredTitle: event.target.value,
  //     }));
  //   };
  //   const amountChangedHandler = (event) => {
  //     setInput((prevState) => ({
  //       ...prevState,
  //       enteredAmount: event.target.value,
  //     }));
  //   };
  //   const dateChangedHandler = (event) => {
  //     setInput((prevState) => ({
  //       ...prevState,
  //       enteredDate: event.target.value,
  //     }));
  //   };

  // shared handler
  //   const inputChangeHandler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setEnteredTitle(value);
  //     } else if (identifier === "amount") {
  //       setEnteredAmount(value);
  //     } else {
  //       setEnteredDate(value);
  //     }
  //   };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent browser from sending request to server - so doesn't reload

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
            // onChange={(event) => inputChangeHandler("title", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
            // onChange={(event) => inputChangeHandler("amount", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
            // onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
