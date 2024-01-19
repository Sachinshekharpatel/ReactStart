import React from "react";
import ChartBar from './ChartBar';
import './ChartBar.css';
import './Chart.css';

const Chart = (props) => {

  const datapointvalue = props.datapoints.map(datapoint => datapoint.value);
  const totalMaximum = Math.max(...datapointvalue);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
          key={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
