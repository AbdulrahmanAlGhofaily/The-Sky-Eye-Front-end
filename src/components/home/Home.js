import React from "react";
import classes from "./Home.module.css";
import transition from "../../utils/transition";

const Home = () => {
  return (
    <>
      <div className={`${classes.header}`}>
        <div className={`${classes.headerText}`}>
          <h1 className="title-w-bg">the sky eye ai</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, mollitia. Accusantium mollitia asperiores
            cupiditate quasi aliquam veniam inventore.
          </p>
        </div>
      </div>
    </>
  );
};

export default transition(Home);
