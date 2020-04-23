import React from "react";
import footer from 'images/png/Tap Circles to Match.png';

// import Unity, { UnityContent } from "react-unity-webgl";

function importAllImages(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}



// const images = importAllImages(require.context('./images/png', false, '/\.png/'));
 
const GameFooter = () => {
  return (
    <div style={{ backgroundColor: '#77CBAF' }}>
        <img src={footer} />
    </div>
  );
};

export default GameFooter;