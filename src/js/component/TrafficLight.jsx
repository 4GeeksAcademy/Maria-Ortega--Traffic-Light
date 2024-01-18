import React, { useState } from "react";

export const TrafficLight = () => {
  const [color , setColor] = useState("red");
  return (
    <div>
      <div id="topSection"></div>
      <div id="box">
        <div className="red light glow" onClick={()=>setColor("red")}></div>
        <div className="yellow light" onClick={()=>setColor("yellow")}></div>
        <div className="green light" onClick={()=>setColor("green")}></div>
      </div>
    </div>
  );
};
