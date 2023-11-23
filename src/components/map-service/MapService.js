import React, { useEffect, useState, useRef } from "react";
import classes from "./MapService.module.css";

import { FeatureGroup, MapContainer, TileLayer, LayerGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";

const MapService = ({ center, zoom, coordsSetter }) => {
  const layerGroupRef = useRef(null);

  const handleCreated = (e) => {
    if (layerGroupRef.current) {
      layerGroupRef.current.clearLayers();
    }
    layerGroupRef.current.addLayer(e.layer);
    coordsSetter(e.layer.getLatLngs()[0]);
  };

  const handleEdited = (e) => {
    const {
      layers: { _layers },
    } = e;
    const editedLayer = Object.values(_layers)[0];
    coordsSetter(editedLayer);
  };

  return (
    <MapContainer
      className={classes.mapContainer}
      center={center}
      zoom={zoom}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <LayerGroup ref={layerGroupRef}>
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleCreated}
            onEdited={handleEdited}
            draw={{
              rectangle: true,
              circle: false,
              polygon: false,
              circlemarker: false,
              marker: false,
              polyline: false,
            }}
            edit={{
              remove: false,
            }}
          />
        </FeatureGroup>
      </LayerGroup>
    </MapContainer>
  );
};

export default MapService;
