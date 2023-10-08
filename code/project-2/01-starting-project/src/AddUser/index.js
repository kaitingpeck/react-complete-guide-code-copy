import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../Button";
import Card from "../Card";
import ErrorModal from "../ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const onResetError = () => {
    setError(null);
  };

  const addUser = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser({
      id: Math.random().toString,
      name: enteredUsername,
      age: enteredAge,
    });

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onResetError={onResetError}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={(event) => setEnteredUsername(event.target.value)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={(event) => setEnteredAge(event.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
