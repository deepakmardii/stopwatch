"use client";
import React, { useState } from "react";

const StopWatch: React.FC = () => {
  const [second, setSeconds] = useState(0);
  const [milliseconds, setMilliSeconds] = useState(0);

  const handleStart = () => {};

  const handleStop = () => {};

  const handleReset = () => {};
  return (
    <div className="flex flex-col text-5xl gap-9 justify-center h-screen items-center">
      <div className="text-7xl font-medium uppercase ">StopWatch</div>
      <div className="bg-emerald-500 p-3 rounded-md">
        <span id="seconds">{second < 10 ? "0" + second : second}</span>:
        <span id="milliseconds">
          {milliseconds < 10 ? "0" + milliseconds : milliseconds}
        </span>
      </div>
      <div className="flex gap-5 bg-red-400 p-3 rounded-md">
        <button
          onClick={handleStart}
          className="bg-red-400 p-5 rounded-md transition-all  hover:bg-red-600"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-red-400 p-5 rounded-md transition-all  hover:bg-red-600"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="bg-red-400 p-5 rounded-md transition-all  hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
