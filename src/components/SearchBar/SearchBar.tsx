import React, {useState} from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../images/icon-arrow.svg";
import axios from 'axios';

const SearchBar = (props: any) => {
    const [IPAddress, setIPAddress] = useState("");

    const handleSearch = async () => {
        const res = await axios.get("https://geo.ipify.org/api/v2/country", {
            params: {
                apiKey: "at_z51jYVTdP6XDJP6I1qYtmcN41Gl2a",
                ipAddress: IPAddress
            }
        });
        props.setIPInfo(res.data);
    };

    const handleInputChange = (e: any) => {
        setIPAddress(e.target.value);
    };

    return (
        <>
            <div className={styles.box}>
                <input
                    type="text"
                    className={styles.search}
                    placeholder="Search for any IP address or domain"
                    onChange={handleInputChange}
                />
                <button className={styles.button} onClick={handleSearch}>
                    <img src={searchIcon}/>
                </button>
            </div>
        </>
    );
};

export default SearchBar;
