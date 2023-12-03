import React from "react";
import classes from "./Home.module.css";
import transition from "../../utils/transition";
import WordChanger from "../../utils/wordChanger";

const Home = () => {
  return (
    <>
      <div className={`${classes.header}`}>
        <div className={`${classes.headerText}`}>
          <WordChanger
            normalWord={"the sky"}
            words={["eye", "ai"]}
            speed={100}
            skipDelay={35}
          />
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
