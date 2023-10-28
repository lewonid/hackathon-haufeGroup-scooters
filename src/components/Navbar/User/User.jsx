import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./User.module.css";

import { AuthContext } from "../../auth/AuthContext"; // adjust the import path if your AuthContext file is elsewhere

const User = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={styles.User}>
      {currentUser ? (
        <Link to="/profile">
          <p>Hello, {currentUser.email}</p>
        </Link>
      ) : (
        // if there is no user logged in, show the sign-in form
        <div className={styles.LoginRegisterContainer}>
          <Link to="/sign-in">
            <p>Sign In</p>
          </Link>
          <Link to="/sign-up">
            <p>Sign Up</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
