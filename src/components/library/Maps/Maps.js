import React, { useState, useEffect, useRef } from "react";
import TitleBar from "../Common/TitleBar";
import mapboxgl from "mapbox-gl";

import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "./styles.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function Maps(props) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiamJsYXplMjkwOCIsImEiOiJja3IzdWR2YWQybW5xMzFxaGV1NTJoc21kIn0.x_Y1W_uGlObPzFugaEE2HQ";
  const { startDragging, maximize, minimize, maximized, _id } = props;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const nav = useRef(null);
  const geocoder = useRef(null);
  const [lat, setLat] = useState(29.4502);
  const [lng, setLng] = useState(77.3172);
  const [zoom, setZoom] = useState(3);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    nav.current = new mapboxgl.NavigationControl();
    geocoder.current = new MapboxGeocoder({
      accessToken:
        "pk.eyJ1IjoiamJsYXplMjkwOCIsImEiOiJja3IzdWdjYzQycDNyMndvNjYwM3NtcDRlIn0.7Yy7wWMML7O8dg8HThPANw",
      mapboxgl: mapboxgl,
    });
    map.current.addControl(nav.current);
    map.current.addControl(geocoder.current, "top-left");
  }, []);
  return (
    <div
      className={
        "maps__container" + (maximized ? " maps__container-maximized" : "")
      }
    >
      <TitleBar
        label="Maps"
        theme="dark"
        maximized={maximized}
        _id={_id}
        maximize={maximize}
        resizing={false}
        minimize={minimize}
        startDragging={startDragging}
      />
      <div className="maps__content">
        <div className="maps__content-map" ref={mapContainer}></div>
        <div className="maps__content-details">
          <div className="maps__content-details-text">
            Latitude : {lat} | Longitude: {lng} | Zoom : {zoom}
          </div>
        </div>
      </div>
    </div>
  );
}
