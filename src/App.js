import logo from "./logo.svg";
import "./App.css";
import Routers from "./routes";
import { ProSidebarProvider } from "react-pro-sidebar";
import Signup from "./containers/authFlow/signup/SignUp";
import LeftSide from "./components/LeftSide";
import SignIn from "./containers/authFlow/signin/SignIn";
import SignUp from "./containers/authFlow/signup/SignUp";
import SentEmail from "./components/Sentemail";
import SetPassword from "./components/Setpassword";
import RecoverPassword from "./components/RecoverPassword";
import PasswordRecovery from "./components/PasswordRecovery";
function App() {
  return (
    
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
