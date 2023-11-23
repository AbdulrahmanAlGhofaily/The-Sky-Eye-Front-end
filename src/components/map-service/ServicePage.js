import React, { useEffect, useState } from "react";
import classes from "./ServicePage.module.css";
import transition from "../../utils/transition";
import MapService from "./MapService";

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const ServicePage = () => {
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    console.log(coords);
  }, [coords]);

  return (
    <div>
      <MapService
        center={[24.746277, 46.745845]}
        zoom={13}
        coordsSetter={setCoords}
      />
      <div></div>
    </div>
  );
};

export default transition(ServicePage);
