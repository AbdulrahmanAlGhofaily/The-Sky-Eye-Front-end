import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <svg
      className={`${classes.logo}`}
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="71"
      viewBox="0 0 71 71"
      fill="none"
    >
      <rect
        x="0.5"
        y="0.5"
        width="70"
        height="70"
        rx="7.5"
        stroke="black"
      />
      <line
        x1="8.559"
        y1="8.625"
        x2="8.54683"
        y2="65.625"
        stroke="black"
      />
      <line
        x1="63.559"
        y1="62.625"
        x2="5.54683"
        y2="62.625"
        stroke="black"
      />
      <path
        d="M2.5 68.5L68.5814 2.5"
        stroke="black"
      />
    </svg>
  );
};

export default Logo;
