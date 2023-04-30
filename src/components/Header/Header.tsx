import React from "react";
import styles from "./Header.module.css"
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {

    return (
        <div className={styles.header}>
            <span className={styles.title}>IP Address Tracker</span>
            <SearchBar/>
        </div>
    )
}

export default Header;