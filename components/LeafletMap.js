import { React, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mapStyles from "./leaflet.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import imageSrc from "../public/images/profile.jpg";
import Image from "next/image";
import { useGlobalArrayContext } from "../context/GlobalArrayContext";

const position = [48.271059, 25.939651];

const LeafletMap = () => {
  const { globalArray } = useGlobalArrayContext();

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {globalArray.map((item, index) => (
        <Marker key={index} position={item}>
          <Popup>
            A marker at lat: {item[0]}, lng: {item[1]}
            <Image
              className={mapStyles.imageContainer}
              src={imageSrc}
              alt="Your Image"
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
