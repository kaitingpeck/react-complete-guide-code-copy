import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  // setTitle("Updated!"); // causes THIS (only this) component function to be executed again, triggering a re-render if something changes
  // console.log(title); // calling setState doesn't change value right away, but schedules a state update; so this will still log the old title
  // };

  // imperative
  // document.getElementById('root).addEventListener();

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">{/* <h2>{title}</h2> */}</div>
      <div className="expense-item__price">${props.amount}</div>
      {/* {<button onClick={clickHandler}>Change Title</button> } */}
    </Card>
  );
}

export default ExpenseItem;
