"use client";
import React, { useState } from "react";

const StopWatch: React.FC = () => {
  const [second, setSeconds] = useState(0);
  const [milliseconds, setMilliSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    const updateTime = () => {
      setMilliSeconds((prevMilliSeconds) => {
        if (prevMilliSeconds == 99) {
          setSeconds((prevSeconds) => prevSeconds + 1);
          return 0;
        }
        return prevMilliSeconds + 1;
      });
    };

    const id = setInterval(updateTime, 10);
    setIntervalId(id);
  };

  const handleStop = () => {
    clearInterval(intervalId);
  };

  const handleReset = () => {
    setSeconds(0);
    setMilliSeconds(0);
  };
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
