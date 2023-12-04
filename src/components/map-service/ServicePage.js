import React, { useState, useRef, useEffect } from "react";
import classes from "./ServicePage.module.css";
import transition from "../../utils/transition";
import SwitchService from "./Services/SwitchService";
import MapService from "./Services/MapService";
import MapInfo from "./Services/MapInfo";
import UploadImage from "./Services/UploadImage";
import Results from "./Results/Results";

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import anime from "animejs";

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState("map");

  const [results, setResults] = useState({
    obsObj: 0,
    compHouses: 0,
    underConst: 0,
    emptyLand: 0,
    greenry: 0,
  });

  const [coords, setCoords] = useState({
    bl: { lat: 0, lng: 0 },
    tl: { lat: 0, lng: 0 },
    tr: { lat: 0, lng: 0 },
    br: { lat: 0, lng: 0 },
  });

  const [area, setArea] = useState(0);

  const titleRef = useRef(null);

  const handleResultsChange = (newResults) => {
    setResults(newResults);
  };

  useEffect(() => {
    anime({
      targets: titleRef.current,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
      complete: () => {
        titleRef.current.style.filter = "none";
      },
    });

    anime({
      targets: titleRef.current,
      filter: ["blur(5px)", "blur(0px)"],
      duration: 2000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <div className={`${classes.servicePage}`}>
      <header className={`${classes.thumbContainer}`}>
        <h1
          ref={titleRef}
          className="title-w-bg"
        >
          Services
        </h1>
      </header>
      <div className={`${classes.servicesSection} row`}>
        <SwitchService
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
        {selectedService === "map" ? (
          <div className={`${classes.serviceCont}`}>
            <div className={`${classes.mapService}`}>
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
        ) : (
          <div className={`${classes.serviceCont}`}>
            <UploadImage setResults={handleResultsChange} />
          </div>
        )}
      </div>
      <Results results={results} />
    </div>
  );
};

export default transition(ServicePage);
