import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import Card from "./Card";
import Loading from "./Loading";
import Page from "./Page";
import moment from "moment";

const Home = () => {
  const page = useSelector((state) => state.page.value);
  // console.log("page", page);

  const date = moment().subtract(1, "day").format("YYYY-MM-DD");
  // console.log("date", date);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`;
      const data = await fetch(url);
      const result = await data.json();

      setData(result);
      setIsLoading(true);
    };

    fetchData();
    setIsLoading(false);
  }, [page,date]);
  // console.log(data);

  return (
    <div>
      <h1 className="head-sec">Most Stared repos</h1>
      {isLoading ? (
        data?.items?.map((item) => {
          return <Card item={item} key={item.id} />;
        })
      ) : (
        <div className="loading-sec">
          <Loading />
        </div>
      )}
      {isLoading ? <Page /> : null}
    </div>
  );
};

export default Home;
