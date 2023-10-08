import React from "react";
import ResultItem from "../ResultItem";
import classes from "./ResultList.module.css";

const ResultList = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          {props.headings.map((label) => (
            <th>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {props.subHeadings.map((label) => (
            <td>{label}</td>
          ))}
        </tr>
        {props.data.map((d) => (
          <ResultItem
            key={d.year}
            year={d.year}
            savingsEndOfYear={d.savingsEndOfYear}
            yearlyInterest={d.yearlyInterest}
            totalInterest={d.totalInterest}
            totalInvestedCapital={d.totalInvestedCapital}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ResultList;
