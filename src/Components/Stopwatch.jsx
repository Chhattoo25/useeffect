import React from "react";
import { useState,useEffect } from "react";
const Stopwatch = () => {
  const [watch, setWatch] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const start = () => {
    if (!timerId) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
      setTimerId(id);
    }
  };

  const pause = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const reset = () => {
    clearInterval(timerId);

    setWatch(0);
    setTimerId(null)
  };
  return <div>
<h1 className="stopwatch">Stopwatch</h1>
<h1 className="count" ><span style={{color:watch%2===0?"violet":"red"}}>{watch}</span></h1>
<button onClick={start}>start</button>
<button onClick={pause}>pause</button>
<button onClick={reset}>reset</button>
  </div>;
};

export default Stopwatch;
