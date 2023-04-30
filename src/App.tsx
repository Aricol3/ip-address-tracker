import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import AddressInfo from "./components/AddressInfo/AddressInfo";
import axios from "axios";

const App = () => {
    const [IPInfo, setIPInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=", {
                params: {
                    apiKey: "at_z51jYVTdP6XDJP6I1qYtmcN41Gl2a",
                }
            });
            setIPInfo(res.data);
        };

        fetchData();
    }, []);

    return (
        <div className="app-container">
            <Header setIPInfo={setIPInfo}/>
            <Map IPInfo={IPInfo}></Map>
            <AddressInfo IPInfo={IPInfo}/>
        </div>
    );
}

export default App;