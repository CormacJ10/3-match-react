import header from 'images/header.png';
import React from 'react';
// import {currScore, canScoreChange} from './platypus/game-body';

function formatScore(initScore, maxScore){
  // console.log(currScore);
  return initScore + " of " + maxScore;
}

const HeaderImage = () => (
  <header className="">
    {/* <h1 className="br4-ns br--top-ns w100" style={{backgroundColor: '#77CBAF', fontSize: '50px', color: 'white'}}>{formatScore(currScore, 6)}</h1> */}
    {/* <img className="br4-ns br--top-ns w100" alt="" src={header} /> */}
  </header>
);

export default HeaderImage;
