import React, { useState } from "react";
import InputGroup from "../InputGroup";
import InputItem from "../InputItem";
import Button from "../Button";
import classes from "./InputForm.module.css";

const InputForm = (props) => {
  const [currSavings, setCurrSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);

  const resetHandler = () => {
    setCurrSavings(0);
    setYearlySavings(0);
    setInterest(0);
    setDuration(0);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      "current-savings": currSavings,
      "yearly-contribution": yearlySavings,
      "expected-return": interest,
      duration: duration,
    };
    props.onSaveInput(formData);
    setCurrSavings(0);
    setYearlySavings(0);
    setInterest(0);
    setDuration(0);
  };

  return (
    <form className={classes["form"]} onSubmit={submitHandler}>
      <InputGroup className={classes["input-group"]}>
        <InputItem
          id="current-savings"
          label="Current Savings ($)"
          type="number"
          value={currSavings}
          onChange={setCurrSavings}
        />
        <InputItem
          id="yearly-contribution"
          label="Yearly Savings ($)"
          type="number"
          value={yearlySavings}
          onChange={setYearlySavings}
        />
      </InputGroup>
      <InputGroup className={classes["input-group"]}>
        <InputItem
          id="expected-return"
          label="Expected Interest (%, per year)"
          type="number"
          value={interest}
          onChange={setInterest}
        />
        <InputItem
          id="duration"
          label="Investment Duration (years)"
          type="number"
          value={duration}
          onChange={setDuration}
        />
      </InputGroup>
      <p className={classes.actions}>
        <Button
          className={classes.buttonAlt}
          type="reset"
          label="Reset"
          onClick={resetHandler}
        />
        <Button type="submit" className={classes.button} label="Calculate" />
      </p>
    </form>
  );
};

export default InputForm;
