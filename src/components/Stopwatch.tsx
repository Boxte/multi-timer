import { useState, useEffect } from "react";

const Stopwatch = (props: any) => {
  const [centiSeconds, setCentiSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [displayedTime, setDisplayedTime] = useState("0s 00");
  const [_time, setTime] = useState({
    centiseconds: 0,
    displayedTime: "0s 00",
  });

  useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((t) => {
          const newCenti = t.centiseconds + 10;
          let secs = Math.floor(newCenti * 0.001);
          return {
            centiseconds: newCenti,
            displayedTime: `${secs}s ${newCenti}`,
          };
        });
        // setDisplayedTime(`${secs}s ${newCenti}`);
        // setCentiSeconds(newCenti);
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
      displayedTime: "",
    });
    //setCentiSeconds(0);
  };

  return (
    <div>
      Stopwatch
      <p></p>
      <p>{_time.displayedTime}</p>
      <button onClick={() => handleStart()}>START</button>
      <button onClick={() => handlePauseResume()}>STOP</button>
      <button onClick={() => handleReset()}>RESET</button>
    </div>
  );
};

export default Stopwatch;
