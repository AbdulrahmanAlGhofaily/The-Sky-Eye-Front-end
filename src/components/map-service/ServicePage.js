import React, { useEffect, useState } from "react";
import classes from "./ServicePage.module.css";
import transition from "../../utils/transition";
import MapService from "./MapService";
import MapInfo from "./MapInfo";

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const ServicePage = () => {
  const [coords, setCoords] = useState({
    bl: { lat: 0, lng: 0 },
    tl: { lat: 0, lng: 0 },
    tr: { lat: 0, lng: 0 },
    br: { lat: 0, lng: 0 },
  });

  const [area, setArea] = useState(0);

  return (
    <div className={`${classes.servicePage}`}>
      <div className={`${classes.mapCont}`}>
        <MapService
          center={[24.746277, 46.745845]}
          zoom={13}
          coordsSetter={setCoords}
          areaSetter={setArea}
        />
        <MapInfo
          coords={coords}
          areaInfo={area}
        />
      </div>
    </div>
  );
};

export default transition(ServicePage);
