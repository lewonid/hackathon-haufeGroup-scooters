import { AuthContext } from "../auth/AuthContext";
import { useContext, useState } from "react";

import Button from "@mui/material/Button";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./ScootersMap.module.css";

import SignIn from "../auth/SignIn";

import ScooterBox from "./ScooterBox/ScooterBox";

import { useEffect } from "react";

import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firestore";
// import AddScooters from "../AddScooters";

const ScootersMap = () => {
  const { currentUser } = useContext(AuthContext);
  const [newMarker, setNewMarker] = useState(null);
  const [clickedCoordonates, setClickedCoordonates] = useState(null);
  const [scooters, setScooters] = useState([]);

  useEffect(() => {
    const scootersCollection = collection(db, "scooters");

    const unsubscribe = onSnapshot(scootersCollection, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(data);
      setScooters(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const onMapClick = (event) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    setClickedCoordonates({ lat: newLat, lng: newLng });
    setNewMarker({
      lat: newLat,
      lng: newLng,
    });
  };

  const libraries = ["places"];
  const mapContainerStyle = {
    width: "50vw",
    height: "100vh",
  };
  const center = {
    lat: 45.76590772692415, // default latitude
    lng: 21.229910568500706, // default longitude
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCDM8ZqrqBfFntcWHf1j3Csy46NK69YqJU",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const handleOnClick = () => {
    console.log("clicked");
  };

  const handleAddScooter = () => {
    const scootersCollection = collection(db, "scooters");
    const newScooter = {
      location: clickedCoordonates,
    };
    if (clickedCoordonates) addDoc(scootersCollection, newScooter);
  };

  const handleDeleteScooter = () => {};

  console.log(clickedCoordonates);

  return (
    <div className={styles.ScootersMap}>
      {currentUser ? (
        <div className={styles.ScootersMapWrapper}>
          <GoogleMap
            id={styles.GoogleMap}
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={newMarker ? newMarker : center}
            onClick={onMapClick}
          >
            {newMarker && (
              <Marker
                position={{ lat: newMarker.lat, lng: newMarker.lng }}
                // custom icons here later
              />
            )}
            {scooters.map((scooter) => (
              <Marker
                key={scooter.id}
                position={scooter.location}
                // label={scooter.id.toString()}
              />
            ))}
          </GoogleMap>
          <div className={styles.ScootersContentWrapper}>
            <h1>Available scooters next to you</h1>
            <Button
              id={styles.ButtonAddScooter}
              variant="contained"
              onClick={handleAddScooter}
            >
              {" "}
              Add Scooter to Map
            </Button>
            <p>*adds the selected Marker from Map</p>
            <div className={styles.ScootersList}>
              {scooters.map((scooter) => (
                <ScooterBox
                  onClick={handleOnClick}
                  key={scooter.id}
                  scooterId={scooter.id}
                  lat={scooter.location.lat}
                  lng={scooter.location.lng}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        // if there is no user logged in, show the sign-in form
        <SignIn />
      )}
    </div>
  );
};

export default ScootersMap;
