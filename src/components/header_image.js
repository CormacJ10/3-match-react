import header from 'images/header.png';
import React from 'react';

function formatScore(initScore, maxScore){
  return initScore + " of " + maxScore;
}

const score = 0;

const HeaderImage = () => (
  <header className="">
  <h1 className="br4-ns br--top-ns w100" style={{backgroundColor: '#77CBAF', fontSize: '50px', color: 'white'}}>{formatScore(score, 6)}</h1>
    {/* <img className="br4-ns br--top-ns w100" alt="" src={header} /> */}
  </header>
);

export default HeaderImage;
