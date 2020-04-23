import React from "react";
import oval from 'images/png/Oval.png';
// import Unity, { UnityContent } from "react-unity-webgl";

function formatScore(initScore, maxScore){
  return initScore + " of " + maxScore;
}

// function renderTable(column, row){
//     let currNumRow=0;
//     // let htmlElement;

//     return (<tr>
//         <td>
//             <img src={oval} />
//         </td>
//         <td>
//             <img src={oval} />
//         </td>
//         <td>
//             <img src={oval} />
//         </td>
//         </tr>)

//     // while(currNumRow != row){
        

//     //     currNumRow++;
//     // }
// }

function importAllImages(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const score = 0;
// const images = importAllImages(require.context('./images/png', false, '/\.png/'));
 
const GameBody = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
        <table>

        </table>
    </div>
  );
};

export default GameBody;