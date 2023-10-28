import { useState } from "react";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.error("Error signing in with password and email:", error);
      });
  };

  return (
    <div className={styles.SignUp}>
      {currentUser ? (
        // if there is a logged in user go back to route /
        <p className={styles.LoggedIn}>You are already logged in.</p>
      ) : (
        <form className={styles.SignUpWrapper} onSubmit={signUp}>
          <h1>SIGN UP</h1>
          <p>to have a registered account</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <p>Already own an account?</p>
          <Link to="/sign-in">
            <span>Sign In</span>
          </Link>
        </form>
      )}
    </div>
  );
};

export default SignUp;
