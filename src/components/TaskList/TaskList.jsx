import React from "react";

const TaskList = () => {
  return (
    <div className="bg-amber-300 rounded-xl px-5 py-6 h-40 w-64 overflow-hidden flex-shrink-0">
        <div className="flex justify-between">
            <p>HIGH</p>
            <p>2024-12-12</p>
        </div>
      <p className="break-words text-sm line-clamp-5 py-2 max-h-20 overflow-y-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate
        nulla ut ligula congue, a malesuada justo posuere. Nulla facilisi. Donec
        rutrum felis vitae dolor euismod, non feugiat justo fringilla.
        Pellentesque habitant morbi... Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed vulputate nulla ut ligula congue, a malesuada justo
        posuere. Nulla facilisi. Donec rutrum felis vitae dolor euismod, non
        feugiat justo fringilla. Pellentesque habitant morbi...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate
        nulla ut ligula congue, a malesuada justo posuere. Nulla facilisi. Donec
        rutrum felis vitae dolor euismod, non feugiat justo fringilla.
        Pellentesque habitant morbi... Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed vulputate nulla ut ligula congue, a malesuada justo
        posuere. Nulla facilisi. Donec rutrum felis vitae dolor euismod, non
        feugiat justo fringilla. Pellentesque habitant morbi...
      </p>
    </div>
  );
};

export default TaskList;
