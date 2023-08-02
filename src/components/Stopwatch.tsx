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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      Stopwatch
      <p></p>
      <div className="flex-none flex-row">
        <p className="w-1/2">{_time.secs}s</p>
        <p className="w-1/2">{_time.centiseconds}</p>
      </div>
      <button onClick={() => handleStart()}>START</button>
      <button onClick={() => handlePauseResume()}>STOP</button>
      <button onClick={() => handleReset()}>RESET</button>
    </div>
  );
};

export default Stopwatch;
