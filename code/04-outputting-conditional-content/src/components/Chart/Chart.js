import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.data.map((datapoint) => datapoint.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.data.map((datapoint) => (
        <ChartBar
          key={datapoint.label} // label should thus be unique for each ChartBar
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
