import { React } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import mapStyles from "./leaflet.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import imageSrc from "../public/images/profile.jpg";
import Image from "next/image";
import { useGlobalArrayContext } from "../context/GlobalArrayContext";

const LeafletMap = ({ getCoordinates, onDataChange }) => {
  const { globalArray } = useGlobalArrayContext();
  const position = [59.3131671, 18.0708653];

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        document.getElementById("latitude").placeholder = e.latlng.lat;
        document.getElementById("longitude").placeholder = e.latlng.lng;
        onDataChange([e.latlng.lat, e.latlng.lng]);
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
      },
    });
    return false;
  };

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
      <Marker position={position}>
        <Popup>
          A marker at lat: {position[0]}, lng: {position[1]}
          <Image
            className={mapStyles.imageContainer}
            src={imageSrc}
            alt="Your Image"
          />
        </Popup>
      </Marker>
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
      {getCoordinates && (
        <>
          <MapEvents />
        </>
      )}
    </MapContainer>
  );
};

export default LeafletMap;
