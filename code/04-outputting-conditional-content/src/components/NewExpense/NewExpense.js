import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const startAddingExpense = (event) => {
    setIsAddingExpense(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAddingExpense(false);
  };

  const stopAddingExpense = () => {
    setIsAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button onClick={startAddingExpense}>Add New Expense</button>
      )}
      {isAddingExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopAddingExpense={stopAddingExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
