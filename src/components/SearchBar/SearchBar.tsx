import React from "react";
import styles from "./SearchBar.module.css"
import searchIcon from "../../images/icon-arrow.svg";

const SearchBar = () => {
    return (
        <>
            <div className={styles.box}>
                <input type="text" className={styles.search} placeholder="Search for any IP address or domain"/>
                    <a className={styles.button} href="#">
                        <img src={searchIcon}/>
                    </a>
            </div>
        </>
    );
}

export default SearchBar;