import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";
import SignIn from "../auth/SignIn";

import styles from "./UserProfile.module.css";
import LogOut from "../auth/LogOut";

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={styles.UserProfile}>
      {currentUser ? (
        <div className={styles.UserProfileWrapper}>
          <h1>Profile</h1>
          <p>Hello, {currentUser.email}</p>
          <p>
            {currentUser.emailVerified
              ? "Email is verified"
              : "Email is not verified"}
          </p>
          <p>
            {currentUser.providerData[0].providerId === "password"
              ? "Password account"
              : "Google account"}
          </p>
          <p></p>
          <LogOut />
        </div>
      ) : (
        // if there is no user logged in, show the sign-in form
        <SignIn />
      )}
    </div>
  );
};

export default UserProfile;
