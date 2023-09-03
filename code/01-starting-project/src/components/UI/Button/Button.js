import React from 'react';
// import styled from "styled-components";
// import './Button.css';
import styles from './Button.module.css' // To use CSS modules - signal build to transform the code so that CSS modules work

// tagged template literal (JS syntax)
// button is a method on the styled object, the things between `` will get passed into the method during execution
// the button will return a button component
// styled has methods for all HTML elements
// the button doesn't have the style of `.button` because we don't set up the className for the button; instead the data between `` will get passed to the button

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = props => {
  return (
    // generated className is Componentname_classnameincss_hash
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
