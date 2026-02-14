import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children, width = "50vw", height = "50vh" ,windowNName,windowState,setWindowState }) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 100,
        y: 50,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={()=>setWindowState(state=>({...state, [windowNName] :false}))} className="dot red "></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>dhruvsahu -zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
