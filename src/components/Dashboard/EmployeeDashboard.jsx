import React from "react";
import Header from "../Common/Header";
import TaskBox from "../TaskBox";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-5  px-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-10">
          <TaskBox title="New Task" count={0} color="blue" />
          <TaskBox title="Completed" count={3} color="green" />
          <TaskBox title="Accepted" count={0} color="yellow" />
          <TaskBox title="Failed" count={1} color="red" />
        </div>
        <h2 className="text-center font-bold text-2xl my-5">Task Lists</h2>
        <div
          id="tasklist"
          className="w-full flex overflow-x-auto max-h-96 space-y-3 gap-4"
        >
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
