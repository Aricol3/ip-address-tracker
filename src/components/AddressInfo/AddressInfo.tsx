import React from "react";
import styles from "./AddressInfo.module.css"

const AddressInfo = (IPInfo: any) => {
    console.log(IPInfo);
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <span className={styles.title}>IP Address</span>
                <span className={styles.text}>{IPInfo.ip}</span>
            </div>
            <hr/>
            <div className={styles.info}>
                <span className={styles.title}>Location</span>
                <span className={styles.text}>Brooklyn, NY 10001</span>
            </div>
            <hr/>
            <div className={styles.info}>
                <span className={styles.title}>Timezone</span>
                <span className={styles.text}>UTC -05:00</span>
            </div>
            <hr/>
            <div className={styles.info}>
                <span className={styles.title}>ISP</span>
                <span className={styles.text}>SpaceX Starlink</span>
            </div>
        </div>
    );
}

export default AddressInfo;