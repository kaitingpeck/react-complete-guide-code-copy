import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(2020);

  const selectedYearHandler = (year) => {
    setSelectedYear(parseInt(year));
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === selectedYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectedYearChanged={selectedYearHandler}
          selected={selectedYear}
        />
        {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses > 0 &&
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))} */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
