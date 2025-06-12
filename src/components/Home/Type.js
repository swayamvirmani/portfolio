import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Mern Stack",
          "Machine Learning",
          "Problem Solver",
         
         
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        cursor: "|",
        wrapperClassName: "typewriter-wrapper",
        cursorClassName: "typewriter-cursor"
      }}
    />
  );
}

export default Type;
