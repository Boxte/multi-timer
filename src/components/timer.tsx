import { useState } from 'react';
import { Typography, Button } from '@mui/joy';

const Timer = (props: any) => {
  const [displayedTime, setDisplayedTime] = useState('0s');
  const [seconds, setSeconds] = useState(0);
  const [centisecond, setCentiseconds] = useState(0);
  const [beginText, setBeginText] = useState('START');
  let int: NodeJS.Timer;

  const handleStartButton = () => {
    int = setInterval(() => startTimer(), 10);
  };

  const startTimer = () => {
    let newCenti = centisecond + 1;
    if (newCenti > 99) {
      setSeconds((seconds) => seconds + 1);
      setCentiseconds(0);
      console.log('hey');
    } else {
      console.log(centisecond);
      setCentiseconds(newCenti);
    }
    setDisplayedTime(`${seconds}s ${centisecond}`);
  };

  const handleResetButton = () => {
    setCentiseconds(0);
    setSeconds(0);
  };

  return (
    <div>
      <Typography>{displayedTime}</Typography>
      <>
        <Button onClick={handleStartButton}>{beginText}</Button>
        <Button>PAUSE</Button>
        <Button variant="outlined">RESET</Button>
      </>
    </div>
  );
};

export default Timer;
