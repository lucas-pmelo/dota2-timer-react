import React from "react";
import { useTimer } from "use-timer";
import Roshan from "../assets/roshan.mp3";
import RoshanDead from "../assets/roshan-img.png";
import RoshanAlive from "../assets/roshan-img-alive.png";

const RoshTimer = () => {
  const { time, start, pause, reset, status } = useTimer({
    endTime: 480,
    initialTime: 0,
    onTimeOver: () => new Audio(Roshan).play()
  });

  return (
    <>
      <div className="clock-holder">
        <p>{time} sec</p>
        <p className="roshan-img">
          {status === "RUNNING" ? (
            <img style={{ width: "200px" }} src={RoshanDead} />
          ) : (
            <img style={{ width: "200px" }} src={RoshanAlive} />
          )}
        </p>
        <div>
          {status === "RUNNING" ? "" : <button onClick={start}>Start</button>}
          {status === "RUNNING" ? <button onClick={pause}>Stop</button> : ""}
          {status === "RUNNING" ? <button onClick={reset}>Reset</button> : ""}
        </div>
      </div>
      {status === "RUNNING" && (
        <p className="roshan-status">Running Rosh respawn...</p>
      )}
    </>
  );
};

export default RoshTimer;
