import React from "react";

function formatScore(initScore, maxScore){
  return initScore + " of " + maxScore;
}

const score = 0;
 
const GameHeader = () => {
  return (
    <div style={{ backgroundColor: '#FFF', color: 'black'}}>
      <p className="h-100 w-100">{formatScore(score, 6)}</p>
    </div>
  );
};

export default GameHeader;