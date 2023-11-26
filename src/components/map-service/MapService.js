import React, { useRef } from "react";
import classes from "./MapService.module.css";

import { FeatureGroup, MapContainer, TileLayer, LayerGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import * as turf from "@turf/turf";
import "leaflet/dist/leaflet.css";

const MapService = ({ center, zoom, coordsSetter, areaSetter }) => {
  const layerGroupRef = useRef(null);

  const handleCreated = (e) => {
    if (layerGroupRef.current) {
      layerGroupRef.current.clearLayers();
    }

    layerGroupRef.current.addLayer(e.layer);

    const coordinates = {
      bl: { lat: e.layer.getLatLngs()[0][0].lat, lng: e.layer.getLatLngs()[0][0].lng },
      tl: { lat: e.layer.getLatLngs()[0][1].lat, lng: e.layer.getLatLngs()[0][1].lng },
      tr: { lat: e.layer.getLatLngs()[0][2].lat, lng: e.layer.getLatLngs()[0][2].lng },
      br: { lat: e.layer.getLatLngs()[0][3].lat, lng: e.layer.getLatLngs()[0][3].lng },
    };

    areaSetter(turf.area(e.layer.toGeoJSON()).toFixed(3));
    coordsSetter(coordinates);
  };

  const handleEdited = (e) => {
    const {
      layers: { _layers },
    } = e;
    const editedLayer = Object.values(_layers)[0];
    coordsSetter({
      bl: { lat: editedLayer.getLatLngs()[0][0].lat, lng: editedLayer.getLatLngs()[0][0].lng },
      tl: { lat: editedLayer.getLatLngs()[0][1].lat, lng: editedLayer.getLatLngs()[0][1].lng },
      tr: { lat: editedLayer.getLatLngs()[0][2].lat, lng: editedLayer.getLatLngs()[0][2].lng },
      br: { lat: editedLayer.getLatLngs()[0][3].lat, lng: editedLayer.getLatLngs()[0][3].lng },
    });
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
