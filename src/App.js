import { Clock } from "./Clock";
import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const [timeDone, setTimeDone] = useState(false);

  let interval;

  const startTimer = () => {
    // setting the future data to countdown from
    const countDownDate = new Date("August 19,2022 23:2:00").getTime();

    interval = setInterval(() => {
      // getting the current date
      const now = new Date().getTime();
      // finding distance b/w future date and current date
      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //stop the timer
        clearInterval(interval);
        setTimeDone(true);
      } else {
        // not less than 0 then constantly update the timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  React.useEffect(() => {
    startTimer();
  }, []);
  return (
    <div className="App">
      <Clock
        timerSeconds={timerSeconds}
        timerMinutes={timerMinutes}
        timerHours={timerHours}
        timerDays={timerDays}
      />
    </div>
  );
}
