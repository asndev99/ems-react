import React from "react";
import Header from "../Common/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className="min-h-screen w-full p-10 bg-black text-white">
      <Header handleLogout={handleLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
