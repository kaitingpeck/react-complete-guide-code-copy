import React from "react";

const InputItem = (props) => {
  const valChangedHandler = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={valChangedHandler}
      />
    </p>
  );
};

export default InputItem;
