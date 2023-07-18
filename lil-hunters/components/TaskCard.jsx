"use client";

import React from "react";

const TaskCard = () => {
  return (
    <div className="px-5 space-x-4 card bg-slate-800 rounded-box">
      <div className="flex flex-grow justify-evenly px-4">
        <div>
          <p className="text-md font-semibold on-navbar">Task Title</p>
          <div className="flex">
            <button className="btn btn-xs btn-outline on-navbar">Details</button>
          </div>
        </div>
        <div>
          <p className="text-sm on-navbar">[amount]sats</p>
        </div>
        <input
          type="text"
          placeholder="Enter post URL here..."
          className="input input-bordered input-sm w-full max-w-xs m-4"
        />
        <div className="m-2">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox form-control"
          />
        </div>
        <div className="m-2">
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
