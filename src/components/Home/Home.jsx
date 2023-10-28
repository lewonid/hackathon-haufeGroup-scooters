import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.HomeWrapper}>
        <h1>THE TRAM IS PLAN B</h1>
        <div className={styles.ButtonsContainer}>
          <Button id={styles.ButtonRent} variant="contained">
            CHECK PRICING
          </Button>
          <Link to="/scooters">
            <Button id={styles.ButtonRentScooter} variant="outlined">
              SEE AVAILABLE SCOOTERS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
