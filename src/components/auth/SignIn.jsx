import { useState } from "react";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./SignIn.module.css";

// import { Redirect } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const SignIn = () => {
  const { currentUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        navigate("/"); // Redirect to Home
      })
      .catch((error) => {
        // Handle Errors here.
        console.error("Error signing in with password and email:", error);
      });
  };

  return (
    <div className={styles.SignIn}>
      {currentUser ? (
        // if there is a logged in user go back to route /
        <p className={styles.LoggedIn}>You are already logged in.</p>
      ) : (
        <form className={styles.SignInWrapper} onSubmit={signIn}>
          <h1>LOGIN</h1>
          <p>to your account</p>
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
          <button type="submit">Log In</button>
          <p>You do not have an account?</p>
          <Link to="/sign-up">
            <span>Sign Up</span>
          </Link>
        </form>
      )}
    </div>
  );
};

export default SignIn;
