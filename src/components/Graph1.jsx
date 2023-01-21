import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Graph1 = ({owner,repo}) => {
  const [graphData, setGraphData] = useState([]);
  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1,4,7,8],
    
      },
    ],
  };

  useEffect(() => {
    const url=`"https://api.github.com/repos/${owner}/${repo}/stats/commit_activity"`
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => setGraphData(res));
  }, [owner,repo]);
  // console.log("Graph 1", graphData[0].days);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <select>
          <option>Commits</option>
          <option>Addition</option>
          <option>Deletions</option>
        </select>
      </div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default Graph1;
