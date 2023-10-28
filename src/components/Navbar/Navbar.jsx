import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

import User from "./User/User";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link to="/">
        <div className={styles.Logo}>
          <h1>TIMIS</h1>
          <p>ELECTRIC</p>
        </div>
      </Link>
      <div className={styles.NavItems}>
        <div className={styles.NavItem}>Electric Scooters</div>
        <div className={styles.NavItem}>Why forward facing?</div>
        <div className={styles.NavItem}>Accesories & Parts</div>
      </div>
      <div className={styles.UserWrapper}>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
