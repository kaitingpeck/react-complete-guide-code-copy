import React from "react";

const ResultItem = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
  return (
    <tr>
      <td>{props.year}</td>
      <td>{formatter.format(props.savingsEndOfYear)}</td>
      <td>{formatter.format(props.yearlyInterest)}</td>
      <td>{formatter.format(props.totalInterest)}</td>
      <td>{formatter.format(props.totalInvestedCapital)}</td>
    </tr>
  );
};

export default ResultItem;
