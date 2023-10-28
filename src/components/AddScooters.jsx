import React, { useEffect } from "react";
import { db } from "../utils/firestore"; // make sure this path is correct
import { collection, addDoc } from "firebase/firestore"; // importing the necessary methods

const AddScooters = () => {
  useEffect(() => {
    const scooters = [
      { location: { lat: 45.766907, lng: 21.23091 } },
      { location: { lat: 45.768, lng: 21.2315 } },
      { location: { lat: 45.7675, lng: 21.228 } },
    ];

    // define the collection reference
    const scootersCollection = collection(db, "scooters");

    // Here we use addDoc to add a new document to the collection
    scooters.forEach(async (scooter) => {
      try {
        const docRef = await addDoc(scootersCollection, scooter);
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    });
  }, []);

  //   return <div>Adding Scooters...</div>;
  //
};

export default AddScooters;
