import { Route, Routes } from "react-router";

import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./components/auth/AuthContext";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import UserProfile from "./components/UserProfile/UserProfile";
import ScootersMap from "./components/ScootersMap/ScootersMap";
import AddScooters from "./components/AddScooters";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        {/* <AddScooters /> */}
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/scooters" element={<ScootersMap />}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
          {/* <Route path="sign-in" element={<SignIn />}></Route> */}
          {/* <Route path="sign-up" element={<SignUp />}></Route> */}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
