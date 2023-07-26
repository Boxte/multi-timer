import { useState, useEffect } from "react";

const Stopwatch = (props: any) => {
  const [centiSeconds, setCentiSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setCentiSeconds((centiSeconds) => centiSeconds + 10);
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

  const handleReset = () => {
    setIsActive(false);
    setCentiSeconds(0);
  };

  return (
    <div>
      Stopwatch
      <p></p>
      <p>{centiSeconds}</p>
      <button onClick={() => handleStart()}>START</button>
      <button onClick={() => handlePauseResume()}>STOP</button>
      <button onClick={() => handleReset()}>RESET</button>
    </div>
  );
};

export default Stopwatch;
