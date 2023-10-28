import React from "react";
import styles from "./ScooterBox.module.css";

import scooter from "../../../assets/img/scooter-good.png";

import PropTypes from "prop-types";

const ScooterBox = ({ scooterId, onClick, lat, lng }) => {
  const handleOnClick = () => {
    console.log("clicked");
  };
  return (
    <div className={styles.ScooterBox}>
      <img src={scooter} alt="scooter" />
      <div className={styles.ScooterData}>
        <h2>Scooter {scooterId} (geoL)</h2>
        <p>
          Coordonations: {lat}, {lng}
        </p>
      </div>
    </div>
  );
};

ScooterBox.propTypes = {
  scooterId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default ScooterBox;
