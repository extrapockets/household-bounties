"use client";

import React from "react";

const TaskCard = () => {
  return (
    <div className="flex px-5 space-x-4 card bg-slate-600 rounded-box place-items-center">
      <div className="space-x-4">
        <p className="flex flex-col text-lg font-semibold">Task Title</p>
      </div>
      <div>
        <p className="text-sm">[amount]sats</p>
      </div>
    </div>
  );
};

export default TaskCard;
