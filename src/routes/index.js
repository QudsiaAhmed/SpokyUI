import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import UnProtectedRoutes from "./UnProtectedRoute";
import Signin from "../containers/authFlow/signin";
import Signup from "../containers/authFlow/signup";
import About from "../containers/mainFlow/about/About";

import React from "react";

const Routers = () => {
  return (
    <Routes>
      {
        <>
        
          <Route path="/" element={<UnProtectedRoutes Component={Signin} />} />
          <Route
            path="/signup"
            element={<UnProtectedRoutes Component={Signup} />}
          />

          <Route path="/" element={<ProtectedRoutes Component={About} />} />
          
        </>
      }
    </Routes>
  );
};

export default Routers;
