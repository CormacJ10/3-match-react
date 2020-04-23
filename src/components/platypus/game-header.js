import React from "react";
// import Unity, { UnityContent } from "react-unity-webgl";

function formatScore(initScore, maxScore){
  return initScore + " of " + maxScore;
}

const score = 0;
 
const GameHeader = () => {
  return (
    <div style={{ backgroundColor: '#77CBAF' }}>
      {/* <p class = "h-100 w-100">{formatScore(score, 6)}</p> */}
    </div>
  );
};

export default GameHeader;