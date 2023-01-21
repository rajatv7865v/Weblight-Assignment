import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Graph1 = () => {
  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3, 6],
      },
    ],
  };
  return (
    <>
      <select>
        <option>Commits</option>
        <option>Addition</option>
        <option>Deletions</option>
      </select>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default Graph1;
