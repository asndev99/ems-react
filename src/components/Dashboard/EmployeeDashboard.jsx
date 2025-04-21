import React from "react";
import Header from "../Common/Header";
import TaskBox from "../TaskBox";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ handleLogout, data }) => {
  return (
    <>
      <Header handleLogout={handleLogout} data={data} />
      <div className="flex flex-col gap-5  px-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-10">
          <TaskBox
            title="New Task"
            count={data?.tasksCounts.newTask}
            color="blue"
          />
          <TaskBox
            title="Completed"
            count={data?.tasksCounts.completed}
            color="green"
          />
          <TaskBox title="Accepted" count={0} color="yellow" />
          <TaskBox
            title="Failed"
            count={data?.tasksCounts.failed}
            color="red"
          />
        </div>
        <h2 className="text-center font-bold text-2xl my-5">Task Lists</h2>
        <div
          id="tasklist"
          className="w-full flex overflow-x-auto space-y-3 gap-4"
        >
          <TaskList data={data} />
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
