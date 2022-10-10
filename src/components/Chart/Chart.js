import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const valueList = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxCount = Math.max(...valueList);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxCount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
