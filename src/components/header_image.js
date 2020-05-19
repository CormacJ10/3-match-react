import header from 'images/header.png';
import React from 'react';
// import {currScore, canScoreChange} from './platypus/game-body';

const HeaderImage = ({
  entry,
  toggleEntry,
  mutationLoading,
  toggleMutationLoading,
}) => (
  <header style={{ position: 'relative' }}>
    <img className="br4-ns br--top-ns w100" alt="" src={header} />
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
