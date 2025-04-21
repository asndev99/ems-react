import React from "react";

const Header = ({ handleLogout, data }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold">
        Hello <br /> <span className="text-3xl font-bold">{data.name}</span>
      </h1>
      <button
        className="bg-red-500 text-white px-5 py-3 rounded-sm text-lg font-medium"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
