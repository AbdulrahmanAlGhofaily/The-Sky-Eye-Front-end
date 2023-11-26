import React, { useEffect, useState } from "react";
import classes from "./MapInfo.module.css";
import RectInfo from "./RectInfo";

const MapInfo = ({ coords, areaInfo }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      async function postData() {
        try {
          const res = await fetch("", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(coords),
          });

          const data = await res.json();
          return data;
        } catch (err) {
          console.log(err.message);
        } finally {
          setSubmitted(false);
        }
      }

      postData();
    }
  }, [coords, submitted]);

  return (
    <div className={`${classes.coordsCont} glassy`}>
      <RectInfo
        coords={coords}
        areaInfo={areaInfo}
      />
      <button
        className={`${classes.submitBtn} glassy`}
        onClick={() => {
          setSubmitted(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default MapInfo;
