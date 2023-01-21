import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect } from "react";

const Graph2 = ({ owner, repo }) => {
  const [data, setData] = useState([]);
  console.log(data)
  // console.log("owner", owner);
  // console.log("repo", repo);

  let graphData = {
    title: {
      text: owner,
    },
    series: [
      {
        data: data,
      },
    ],
  };
  //  console.log("graphData",graphData)
  useEffect(() => {
    const url = `https://api.github.com/repos/${owner}/${repo}/stats/code_frequency`;

    const fetchingData = async () => {
      const data = await fetch(url);
      const result = await data.json();
      setData(result);
    };
    fetchingData();
  }, [owner, repo]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={graphData} />
    </div>
  );
};

export default Graph2;
