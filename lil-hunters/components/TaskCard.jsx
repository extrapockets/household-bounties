"use client";

import React from "react";

const TaskCard = () => {
  return (
    <div className="px-5 space-x-4 card bg-slate-800 rounded-box place-items-center">
      <div className="flex m-4">
        <div className="flex-grow m-4">
          <p className="text-md font-semibold">Task Title</p>
          <div className="flex justify-between">
            <button className="btn btn-xs btn-outline">Details</button>
          </div>
        </div>
        <div className="flex-grow m-4">
          <p className="text-sm">[amount]sats</p>
        </div>
        <input
          type="text"
          placeholder="Enter post URL here..."
          className="input input-bordered input-sm w-full max-w-xs m-4"
        />
        <div className="flex-grow m-4">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox form-control"
          />
        </div>
        <div className="flex-grow m-4">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
