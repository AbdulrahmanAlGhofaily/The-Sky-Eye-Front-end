import React from "react";
import classes from "./RectInfo.module.css";

const RectInfo = ({ coords, areaInfo }) => {
  return (
    <>
      <h3 className={`${classes.title}`}>Rectangle coordinates:</h3>
      <span style={{ marginLeft: "auto" }}>(latitude, longitude)</span>
      <div className={`${classes.coordinate}`}>
        <p>Top Left Corner:</p>
        <span>
          {coords.tl.lat.toFixed(4)}, {coords.tl.lng.toFixed(4)}
        </span>
      </div>
      <div className={`${classes.coordinate}`}>
        <p>Top Right Corner:</p>
        <span>
          {coords.tr.lat.toFixed(4)}, {coords.tr.lng.toFixed(4)}
        </span>
      </div>
      <div className={`${classes.coordinate}`}>
        <p>Bottom Left Corner:</p>
        <span>
          {coords.bl.lat.toFixed(4)}, {coords.bl.lng.toFixed(4)}
        </span>
      </div>
      <div className={`${classes.coordinate}`}>
        <p>Bottom Right Corner:</p>
        <span>
          {coords.br.lat.toFixed(4)}, {coords.br.lng.toFixed(4)}
        </span>
      </div>
      <span className={`${classes.lineSeparator}`}></span>
      <h3>Selected area:</h3>
      <span className={`${classes.areaInfo}`}>{areaInfo} m²</span>
      <span className={`${classes.areaInfo}`}>{areaInfo / 1000000} km²</span>
      <span className={`${classes.lineSeparator}`}></span>
    </>
  );
};

export default RectInfo;
