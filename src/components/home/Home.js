import React from "react";
import classes from "./Home.module.css";
import transition from "../../utils/transition";
import WordChanger from "../../utils/wordChanger";

const Home = () => {
  return (
    <>
      <div className={`${classes.header}`}>
        <div className={`${classes.headerText}`}>
          <div></div>
          <WordChanger
            normalWord={"the sky"}
            words={["eye", "ai"]}
            speed={100}
            skipDelay={35}
          />
          <p>
            Explore the intricate tapestry of construction, transformation, and greenery as this intelligent eye
            unravels the stories etched into every street and skyline.
          </p>
          <div className={`${classes.lineSeparator}`}></div>
        </div>
      </div>
    </>
  );
};

export default transition(Home);
