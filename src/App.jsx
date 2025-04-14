import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";

function App({}) {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setLocalStorage();
  });

  const handleLogin = (email, password) => {
    if (email == "user" && password == "123") {
      setUser("user");
    } else if (email == "user" && password == "123") {
      setUser("admin");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* {user == "user" ? <EmployeeDashboard /> : <AdminDashboard />} */}
      {/* <Login /> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
