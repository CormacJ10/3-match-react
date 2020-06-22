import header from 'images/header.png';
import React from 'react';
import winScreen from "images/png/Congratulations-Page.png";
import platyBanner from "images/platy-logo.png";
import blancHeader from "images/blanc-header-sm.png";
// import {currScore, canScoreChange} from './platypus/game-body';

function checkScore(initScore2, maxScore2){
  if(initScore2 == maxScore2){
    return <img className="br4-ns br--top-ns w100" alt="" src={winScreen} />
  }
  else{
    return <h1 className="br4-ns br--top-ns w100 game-header" >{initScore2 + " of "+ maxScore2}</h1>
  }
}

const HeaderImage = ({
  entry,
  toggleEntry,
  mutationLoading,
  toggleMutationLoading,
}) => (
  <header>
    <img className="br4-ns br--top-ns w100 platypus-header" alt="" src={blancHeader} />
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.9)',
      }}
    >
      <h2>Test Controls</h2>

      <div>
        <h3>
          Entry: {`${entry}`}{' '}
          <span>
            <button className="btn btn-primary" onClick={toggleEntry}>
              Toggle
            </button>
          </span>
        </h3>
      </div>

      <div>
        <h3>
          Submitting: {`${mutationLoading}`}{' '}
          <span>
            <button className="btn btn-primary" onClick={toggleMutationLoading}>
              Toggle
            </button>
          </span>
        </h3>
      </div>
    </div>
  </header>
);

export default HeaderImage;
