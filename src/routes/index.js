import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import UnProtectedRoutes from "./UnProtectedRoute";
import LeftSide from "../components/LeftSide";
import SignIn from "../containers/authFlow/signin/SignIn";
import SignUp from "../containers/authFlow/signup/SignUp";
import Sentemail from "../components/Sentemail";
import Setpassword from "../components/Setpassword";
import React from "react";

const Routers = () => {
  return (
    <Routes>
      {
        <>

          <Route path="/" element={<UnProtectedRoutes Component={SignIn} />} />
          <Route
            path="/signup"
            element={<UnProtectedRoutes Component={SignUp} />}
          />
          <Route
            path="/signin"
            element={<UnProtectedRoutes Component={SignIn} />}
          />
          <Route
            path="/signin"
            element={<UnProtectedRoutes Component={SignIn} />}
          />

          <Route
            path="/sentemail"
            element={<UnProtectedRoutes Component={Sentemail} />}
          />

          <Route
            path="/setpassword"
            element={<UnProtectedRoutes Component={Setpassword} />}
          />
        </>
      }
    </Routes>
  );
};

export default Routers;
