import React from "react";
import classes from "./SwitchService.module.css";

const SwitchService = ({ selectedService, setSelectedService }) => {
  function switchService(e) {
    const service = e.target.textContent.toLowerCase().split(" ")[0];
    setSelectedService(service);
  }

  return (
    <div className={`${classes.switchCont} glassy`}>
      <button
        onClick={switchService}
        className={`${classes.switchBtn} ${selectedService === "map" ? classes.active : ""}`}
      >
        Map
      </button>
      <button
        onClick={switchService}
        className={`${classes.switchBtn} ${selectedService === "image" ? classes.active : ""}`}
      >
        Image Upload
      </button>
    </div>
  );
};

export default SwitchService;
