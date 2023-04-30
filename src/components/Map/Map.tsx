import React, { useEffect, useState } from "react";
import {MapContainer, Marker, TileLayer, useMap} from "react-leaflet";
import styles from "./Map.module.css";
import customIcon from "../../images/icon-location.svg";
import L from "leaflet";

function MyComponent(props: any) {
    const map = useMap()
    console.log('map center:', map.getCenter())
    useEffect(() => {
        if (props.IPInfo && props.IPInfo.location) {
            const { lat, lng } = props.IPInfo.location;
            map.setView([lat,lng], 13);
        }
    }, [props.IPInfo]);
    return null;
}

const Map = (props: any) => {
    const customMarkerIcon = L.icon({
        iconUrl: customIcon,
        iconSize: [40, 50],
        iconAnchor: [22, 50],
        popupAnchor: [-3, -76],
    });

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);


    useEffect(() => {
        if (props.IPInfo && props.IPInfo.location) {
            const { lat, lng } = props.IPInfo.location;
            setLat(lat);
            setLng(lng);
        }
    }, [props.IPInfo]);

    return (
        <MapContainer className={styles.container} center={[lat,lng]} zoom={13} zoomControl={false}>
            <MyComponent IPInfo={props.IPInfo}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {props.IPInfo && <Marker position={[lat,lng]} icon={customMarkerIcon} />}
        </MapContainer>
    );
};

export default Map;
