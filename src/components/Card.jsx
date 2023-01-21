import React, { useState } from "react";
import "./Card.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
const Card = ({ item }) => {
//   console.log(item);
  const {
    owner,
    stargazers_count,
    open_issues_count,
    name,
    description,
    pushed_at
  } = item;
  const [showGraph, setShowGraph] = useState(false);
 
  const graphHandler = () => {
    setShowGraph(!showGraph);
  };
//   console.log(pushed_at.split('T'))
  return (
    <>
      <div className="container">
        <div className="img-sec">
          <img src={owner.avatar_url} alt="avatar" />
        </div>
        <div className="info-sec">
          <div>
            <h2>{name}</h2>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div className="span-sec">
            <span>Stars: {stargazers_count}</span>
            <span>Issues: {open_issues_count}</span>
          </div>
        </div>
        <div>
          Last pushed {pushed_at.split('T')[0]} by {owner.login}
        </div>
        <div className="logo-sec" onClick={graphHandler}>
          {showGraph ? <KeyboardArrowDownIcon /> : <NavigateNextIcon />}
        </div>
      </div>
      {showGraph ? (
        <div>
          <Graph1 owner={owner.login} repo={name}/>
          <Graph2 owner={owner.login} repo={name}/>
        </div>
      ) : null}
    </>
  );
};

export default Card;
