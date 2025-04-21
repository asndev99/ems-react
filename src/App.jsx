import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);
  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser).role);
      }
    }
  }, [authData, user]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (employee) => employee.email === email && employee.password === password
      );
      if (employee) {
        setUser({ role: "employee" });
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} data={loggedInUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard handleLogout={handleLogout} data={loggedInUser} />
      ) : null}
    </>
  );
}

export default App;
