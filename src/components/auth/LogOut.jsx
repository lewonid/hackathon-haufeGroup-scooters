import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const userSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out successfully");
        navigate("/"); // redirecting to homepage
      })
      .catch((error) => console.log(error));
  };

  return (
    <button
      style={{
        padding: "0.7rem",
        backgroundColor: "black",
        border: "none",
        color: "white",
        fontWeight: "bold",
      }}
      onClick={() => {
        userSignout();
      }}
    >
      Sign out
    </button>
  );
};

export default LogOut;
