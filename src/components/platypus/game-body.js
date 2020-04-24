import React from "react";
import oval from 'images/png/Oval.png';
import platyOval from 'images/png/platypus-oval-sm.png';
// import Unity, { UnityContent } from "react-unity-webgl";

function formatScore(initScore, maxScore){
  return initScore + " of " + maxScore;
}

function renderTable(column, row){
    let currNumRow=0;
    // let htmlElement;

    return (<tr>
        <td>
            <img src={platyOval}/>
        </td>
        <td>
            <img src={platyOval} />
        </td>
        <td>
            <img src={platyOval} />
        </td>
        </tr>
        
        );

    // while(currNumRow != row){
        

    //     currNumRow++;
    // }
}

function importAllImages(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const score = 0;
// const images = importAllImages(require.context('./images/png', false, '/\.png/'));
 
const GameBody = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px'}}>
        <div style={{marginBottom: '12px', display: 'flex', color: 'white', justifyContent:'center', alignItems:'center', borderRadius: '10px' }}>
          <h1 className="" style={{backgroundColor: '#77CBAF', width: '80%', borderRadius: '7px'}}>{formatScore(score, 6)}</h1>
        </div>
        <table style={{display: 'flex', color: 'white', justifyContent:'center', alignItems:'center'}}>
            <tbody>
              {renderTable(3, 4)}
              {renderTable(3, 4)}
              {renderTable(3, 4)}
            </tbody>
        </table>
        <div style={{marginTop: '12px', display: 'flex', color: 'black', justifyContent:'center', alignItems:'center' }}>
          <div className="" style={{ backgroundColor: 'white', width: '80%', border: 'solid black 1px', borderRadius: '7px'}}>
            <p style={{marginBottom: '0', padding: '5px', fontStyle: 'bold', fontSize: '25px'}}>Tap Circles to Match Patterns</p>
          </div>
        </div>
    </div>
  );
};

export default GameBody;