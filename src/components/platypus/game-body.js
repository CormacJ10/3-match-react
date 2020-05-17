import React from "react";
import platyOval from 'images/png/platypus-oval-sm.png';
import { render } from 'react-dom';
import shoe1 from 'images/png/Bitmap-sm.png';
import shoe2 from 'images/png/Bitmap-1-sm.png';
import shoe3 from 'images/png/Bitmap-2-sm.png';
import shoe4 from 'images/png/Bitmap-3-sm.png';
import shoe5 from 'images/png/Bitmap-4-sm.png';
import shoe6 from 'images/png/Bitmap-5-sm.png';
import score from './game-manager';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*max)+min;
}

const shoeCountList={
  'shoe1':0,
  'shoe2':0,
  'shoe3':0,
  'shoe4':0,
  'shoe5':0,
  'shoe6':0,
}

const shoes={
  'shoe1':shoe1,
  'shoe2':shoe2,
  'shoe3':shoe3,
  'shoe4':shoe4,
  'shoe5':shoe5,
  'shoe6':shoe6,
}

function renderShoe(){

  const randCounter = getRandomInt(1, 6);

  if(shoeCountList['shoe'+randCounter] != 2){
    shoeCountList['shoe'+randCounter] += 1;
    return ['shoe'+randCounter, shoes['shoe'+randCounter]];
  }
  else{
    for(var key in shoeCountList){
      if(shoeCountList[key] != 2){
        shoeCountList[key]++;
        return ['shoe'+key, shoes[key]];
      }
    }
  }
}

// Initialize Shoes...
const renderedShoe1=renderShoe();
const renderedShoe2=renderShoe();
const renderedShoe3=renderShoe();
const renderedShoe4=renderShoe();
const renderedShoe5=renderShoe();
const renderedShoe6=renderShoe();
const renderedShoe7=renderShoe();
const renderedShoe8=renderShoe();
const renderedShoe9=renderShoe();
const renderedShoe10=renderShoe();
const renderedShoe11=renderShoe();
const renderedShoe12=renderShoe();
 
const GameBody = () => {
  let tableCell = [];
  const [clicked1, setClick1] = React.useState(false);
  const onClick1 = event => {
    setClick1(true);
  };
  const [clicked2, setClick2] = React.useState(false);
  const onClick2 = event => {
    setClick2(true);
  };
  const [clicked3, setClick3] = React.useState(false);
  const onClick3 = event => {
    setClick3(true);
  };
  const [clicked4, setClick4] = React.useState(false);
  const onClick4 = event => {
    setClick4(true);
  };
  const [clicked5, setClick5] = React.useState(false);
  const onClick5 = event => {
    setClick5(true);
  };
  const [clicked6, setClick6] = React.useState(false);
  const onClick6 = event => {
    setClick6(true);
  };
  const [clicked7, setClick7] = React.useState(false);
  const onClick7 = event => {
    setClick7(true);
  };
  const [clicked8, setClick8] = React.useState(false);
  const onClick8 = event => {
    setClick8(true);
  };
  const [clicked9, setClick9] = React.useState(false);
  const onClick9 = event => {
    setClick9(true);
  };
  const [clicked10, setClick10] = React.useState(false);
  const onClick10 = event => {
    setClick10(true);
  };
  const [clicked11, setClick11] = React.useState(false);
  const onClick11 = event => {
    setClick11(true);
  };
  const [clicked12, setClick12] = React.useState(false);
  const onClick12 = event => {
    setClick12(true);
  };


  return (
    <div style={{backgroundColor: 'white', padding: '20px'}}>
        <table style={{display: 'flex', color: 'white', justifyContent:'center', alignItems:'center'}}>
          <tbody>
          <tr data-row-id="1">
            <td data-column-id="1" className='padding-content' onClick={onClick1}>
              {clicked1 ? <img className={renderedShoe1[0]} src={renderedShoe1[1]} /> : <img className='' src={platyOval} />}
            </td>
            <td data-column-id="2" className='padding-content' onClick={onClick2}>
              {clicked2 ? <img className={renderedShoe2[0]} src={renderedShoe2[1]} /> : <img className='' src={platyOval} />}
            </td>
            <td data-column-id="3" className='padding-content' onClick={onClick3}>
              {clicked3 ? <img className={renderedShoe3[0]} src={renderedShoe3[1]}/> : <img className='' src={platyOval} />}
            </td>
          </tr>
          <tr data-row-id="2">
            <td data-column-id="1" className='padding-content' onClick={onClick4}>
              {clicked4 ? <img className={renderedShoe4[0]} src={renderedShoe4[1]} /> : <img className='' src={platyOval} />}
            </td>
            <td data-column-id="2" className='padding-content' onClick={onClick5}>
              {clicked5 ? <img className={renderedShoe5[0]} src={renderedShoe5[1]} /> : <img className='' src={platyOval} />}
            </td>
            <td data-column-id="3" className='padding-content' onClick={onClick6}>
              {clicked6 ? <img className={renderedShoe6[0]} src={renderedShoe6[1]} /> : <img className='' src={platyOval} />}
            </td>
          </tr>
          <tr data-row-id="3">
            <td data-column-id="1" className='padding-content' onClick={onClick7}>
              {clicked7 ? <img className={renderedShoe7[0]} src={renderedShoe7[1]} /> : <img className='' src={platyOval} />}
            </td>
            <td data-column-id="2" className='padding-content' onClick={onClick8}>
              {clicked8 ? <img className={renderedShoe8[0]} src={renderedShoe8[1]} /> : <img className='' src={platyOval} />}
            </td>
            <td data-column-id="3" className='padding-content' onClick={onClick9}>
              {clicked9 ? <img className={renderedShoe9[0]} src={renderedShoe9[1]}/> : <img className='' src={platyOval} />}
            </td>
          </tr>
          <tr data-row-id="4">
            <td data-column-id="1" className='padding-content' onClick={onClick10}>
              {clicked10 ? <img className={renderedShoe10[0]} src={renderedShoe10[1]}/> : <img className='' src={platyOval} />}
            </td>
            <td data-column-id="2" className='padding-content' onClick={onClick11}>
              {clicked11 ? <img className={renderedShoe11[0]} src={renderedShoe11[1]} /> : <img className='' src={platyOval} />}
            </td>
            <td data-column-id="3" className='padding-content' onClick={onClick12}>
              {clicked12 ? <img className={renderedShoe12[0]} src={renderedShoe12[1]} /> : <img className='' src={platyOval} />}
            </td>
          </tr>
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