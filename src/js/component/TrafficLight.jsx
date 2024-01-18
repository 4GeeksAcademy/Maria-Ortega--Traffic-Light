import React, { useState } from "react";

// const {colorChange , setColorChange} = useState {null};


export const TrafficLight = () => {
  return (
    <div>
      <div id="topSection"></div>
      <div id="box">
        <div className="red light" onClick={setColorChange}></div>
        <div className="yellow light" onClick={setColorChange}></div>
        <div className="green light" onClick={setColorChange}></div>
      </div>
    </div>
  );
};
