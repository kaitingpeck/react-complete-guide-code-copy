import react, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const inputHandler = (event) => {
    props.onSelectedYearChanged(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={inputHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
