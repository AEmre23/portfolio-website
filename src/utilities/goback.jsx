import React from 'react'

const GoBack = ({ width, height, setScreen }) => {
  return (
    <svg
      fill="currentColor"
      width={width ? width : "20"}
      height={height ? height : "20"}
      onClick={() => setScreen("hero")}
      viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g data-name="Layer 2" id="Layer_2"> <g data-name="E421, Back, buttons, multimedia, play, stop" id="E421_Back_buttons_multimedia_play_stop"> <circle className="cls-1" cx="256" cy="256" r="246"></circle> <line className="cls-1" x1="352.26" x2="170.43" y1="256" y2="256"></line> <polyline className="cls-1" points="223.91 202.52 170.44 256 223.91 309.48"></polyline> </g> </g> </g>
    </svg>
  )
}

export default GoBack
