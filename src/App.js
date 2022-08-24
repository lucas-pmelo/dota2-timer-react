import "./App.css";
import { useState } from "react";
import DisplayComponent from "./Components/DisplayComponent";
import BtnComponent from "./Components/BtnComponent";
import RoshTimer from "./Components/RoshTimer";
import Stack from "./assets/stack.mp3";
import Bountyrune from "./assets/bounty-runes.mp3";
import Powerrune from "./assets/power-runes.mp3";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h,
    updatedS45 = time.s,
    updatedM4 = time.m,
    updatedM4b = time.m,
    updatedM5 = time.m,
    updatedS50 = time.s,
    updatedS55 = time.s;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
      updatedM4 = 0;
      updatedM4b = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
      updatedS45 = 0;
      updatedS50 = 0;
      updatedS55 = 0;
      updatedM4++;
      updatedM4b++;
      updatedM5++;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
      updatedS45++;
      updatedS50++;
      updatedS55++;
    }
    if (updatedS45 === 45) {
      updatedS45 = 0;
      playStack();
    }
    if (updatedM4 === 4 && updatedS50 === 50) {
      updatedM4 = 0;
      updatedS50 = 0;
      playBounty();
    }
    if (updatedM4b >= 4 && updatedS55 === 55) {
      updatedS55 = 0;
      playPower();
    }
    if (updatedM5 === 5) {
      updatedM4 = 0;
      updatedS50 = 0;
      updatedM5 = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  function playStack() {
    new Audio(Stack).play();
  }
  function playBounty() {
    new Audio(Bountyrune).play();
  }
  function playPower() {
    new Audio(Powerrune).play();
  }

  return (
    <div className="App">
      <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
            <DisplayComponent time={time} />
            <BtnComponent
              status={status}
              resume={resume}
              reset={reset}
              stop={stop}
              start={start}
            />
          </div>
        </div>
        <div className="roshan-timer">
          <RoshTimer />
        </div>
      </div>
    </div>
  );
}

export default App;
