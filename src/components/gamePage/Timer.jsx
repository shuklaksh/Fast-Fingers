import React from 'react'
import "./Timer.css"

function Timer() {
    return (
        <div className="countdown">
          <div className="base-timer">
            <svg
              className="base-timer__svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="base-timer__circle">
                <circle
                  className="base-timer__path-elapsed"
                  cx="50"
                  cy="50"
                  r="45"
                />
                <path
                  id="base-timer-path-remaining"
                //   strokeDasharray={colorPath(time, timePassed.toFixed(2))}
                  className="base-timer__path-remaining"
                  d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                  "
                //   style= {{stroke:`${pickColor(time, timePassed)}`}}
                ></path>
              </g>
            </svg>
            <span className="base-timer__label">ss</span>
          </div>
        </div>
  )
}

export default Timer
