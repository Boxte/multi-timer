import { useState, useEffect } from "react";

const Stopwatch = (props: any) => {
  const [isPaused, setIsPaused] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [_time, setTime] = useState({
    centiseconds: 0,
    secs: 0,
    displayedTime: "0s 00",
  });

  useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((t) => {
          let newCenti = t.centiseconds + 1;
          let newSecs = t.secs;
          if (newCenti === 100) {
            newSecs += 1;
            newCenti = 0;
          }
          return {
            centiseconds: newCenti,
            secs: newSecs,
            displayedTime: `${newSecs}s ${String(newCenti).padStart(2, "0")}`,
          };
        });
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime({
      centiseconds: 0,
      secs: 0,
      displayedTime: "",
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Stopwatch</h1>

      <p></p>
      <div className="flex flex-row">
        <div className="grow" />
        <p className="w-16">{_time.secs}s</p>
        <p className="w-16">{_time.centiseconds}</p>
        <div className="grow" />
      </div>
      <div className="flex-none flex-row space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleStart()}
        >
          {isActive ? "RESUME" : "START"}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleStop()}
        >
          STOP
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleReset()}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
