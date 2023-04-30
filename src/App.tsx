import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import AddressInfo from "./components/AddressInfo/AddressInfo";

const App = () => {
    const [IPInfo, setIPInfo] = useState(null);

    return (
        <div className="app-container">
            <Header setIPInfo={setIPInfo}/>
            <Map></Map>
            <AddressInfo IPInfo={IPInfo}/>
        </div>
    );
}

export default App;