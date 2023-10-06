import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import UnProtectedRoutes from "./UnProtectedRoute";
import LeftSide from "../components/LeftSide";
import SignIn from "../containers/authFlow/signin/SignIn";
import SignUp from "../containers/authFlow/signup/SignUp";
import Sentemail from "../components/Sentemail";
import Setpassword from "../components/Setpassword";
import RecoverPassword from "../components/RecoverPassword";
import ForRecoveryPassword from "../components/ForRecoveryPassword";
import UpdatePassword from "../components/UpdatePassword";
import Sidebar from "../components/Sidebar.js";
import Navbar from "../components/navbar";
import GridBtn from '../components/GridBtn';
import StandardPlan from '../components/StandardPlan';
import ChatBotCreditCompo from '../components/ChatbotCreditCompo';
import ChartGrid from '../components/ChartGrid';
import Dashboard from '../containers/mainFlow/Dashboard'
import ChatBotTabs from "../containers/mainFlow/ChatBotTabs";
import ChatBotTextTabs from "../containers/mainFlow/ChatbotTabsText"
import ChatSocialAccount from "../containers/mainFlow/ChatSocialAccount";
import React from "react";

const Routers = () => {
  return (
    <Routes>
      {
        <>

          <Route path="/" element={<UnProtectedRoutes Component={SignUp} />} />
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
          <Route
            path="/recoverpassword"
            element={<UnProtectedRoutes Component={RecoverPassword} />}
          />
          <Route
            path="/forrecoverypassword"
            element={<UnProtectedRoutes Component={ForRecoveryPassword} />}
          />
          <Route
            path="/updatepassword"
            element={<UnProtectedRoutes Component={UpdatePassword} />}
          />
          <Route
            path="/Dashboard"
            element={<UnProtectedRoutes Component={Dashboard} />}
          />
          <Route
            path="/ChatBotTabs"
            element={<UnProtectedRoutes Component={ChatBotTabs} />}
          />
        </>
      }
    </Routes>
  );
};

export default Routers;
