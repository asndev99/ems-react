import React from "react";

const colorMap = {
  blue: "bg-blue-500",
  green: "bg-green-400",
  yellow: "bg-yellow-400",
  red: "bg-rose-400",
};
const TaskBox = ({ title, count, color }) => {
  return (
    <div
      className={`${colorMap[color]} text-white p-4 rounded-md h-36 gap-10 shadow-md`}
    >
      <div className="flex flex-col gap-10 pt-4">
        <p className="text-2xl font-semibold">{count}</p>
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default TaskBox;
