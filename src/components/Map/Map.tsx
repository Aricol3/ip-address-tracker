import React from "react";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import styles from "./Map.module.css"
import customIcon from "../../images/icon-location.svg";
import L from "leaflet";

const Map = () => {
    const customMarkerIcon = L.icon({
        iconUrl: customIcon,
        iconSize: [40, 50],
        iconAnchor: [22, 50],
        popupAnchor: [-3, -76],
    });

    return (
        <MapContainer className={styles.container} center={[51.505, -0.09]} zoom={13} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} icon={customMarkerIcon}/>
        </MapContainer>
    );
};


export default Map;