import React from "react";
import styles from "./AddressInfo.module.css"

const AddressInfo = (props: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <span className={styles.title}>IP Address</span>
                <span className={styles.text}>{props.IPInfo && props.IPInfo.ip}</span>
            </div>
            <hr/>
            <div className={styles.info}>
                <span className={styles.title}>Location</span>
                <span
                    className={styles.text}>{props.IPInfo && props.IPInfo.location.country}, {props.IPInfo && props.IPInfo.location.region}, {props.IPInfo && props.IPInfo.location.city}</span>
            </div>
            <hr/>
            <div className={styles.info}>
                <span className={styles.title}>Timezone</span>
                <span className={styles.text}>UTC {props.IPInfo && props.IPInfo.location.timezone}</span>
            </div>
            <hr/>
            <div className={styles.info}>
                <span className={styles.title}>ISP</span>
                <span className={styles.text}>{props.IPInfo && props.IPInfo.as.name}</span>
            </div>
        </div>
    );
}

export default AddressInfo;
