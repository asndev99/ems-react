import React from "react";

const CreateTask = () => {
  return (
    <div className="mt-10">
      <form className="flex items-start justify-between gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-1/2">
          <div>
            <h3 className="mb-1">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full p-2 rounded border border-gray-400 bg-black text-white"
            />
          </div>

          <div>
            <h3 className="mb-1">Date</h3>
            <input
              type="date"
              className="w-full p-2 rounded border border-gray-400 bg-black text-white"
            />
          </div>

          <div>
            <h3 className="mb-1">Assign to</h3>
            <input
              type="text"
              placeholder="employee name"
              className="w-full p-2 rounded border border-gray-400 bg-black text-white"
            />
          </div>

          <div>
            <h3 className="mb-1">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="w-full p-2 rounded border border-gray-400 bg-black text-white"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col">
          <h3 className="mb-1">Description</h3>
          <textarea
            placeholder="Task Description"
            rows={8}
            className="w-full p-2 rounded border border-gray-400 bg-black text-white resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-10 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition-all"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
