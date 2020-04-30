import React from "react";
import platyOval from 'images/png/platypus-oval-sm.png';
import shoe1 from 'images/png/Bitmap-sm.png';
import shoe2 from 'images/png/Bitmap-1-sm.png';
import shoe3 from 'images/png/Bitmap-2-sm.png';
import shoe4 from 'images/png/Bitmap-3-sm.png';
import shoe5 from 'images/png/Bitmap-4-sm.png';
import shoe6 from 'images/png/Bitmap-5-sm.png';

function formatScore(initScore, maxScore){
  return initScore + " of " + maxScore;
}

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

const score = 0;

function renderShoe(){

  const randCounter = getRandomInt(1, 6);

  if(shoeCountList['shoe'+randCounter] != 2){
    shoeCountList['shoe'+randCounter] += 1;
    // console.log('shoe'+randCounter+":"+shoeCountList['shoe'+randCounter]);
    return shoes['shoe'+randCounter];
  }
  else{
    for(var key in shoeCountList){
      if(shoeCountList[key] != 2){
        shoeCountList[key]++;
        // console.log(key);
        return shoes[key];
      }
    }
  }

  // console.log(shoeCountList);
}

let elementClicked = false;
function onElementClick(){
  return elementClicked = true;
}

// const clicked =false;

function renderTableCell(col){
  let tableCell = [];
  const [clicked, setClick] = React.useState(false);
  // const onClick = () => setClick(true);
  const onClick = event => {
    setClick(true);
  };

  for(let currCell =0; currCell < col; currCell++){
    const key = renderShoe();
    // console.log(key);
    tableCell.push(<div className='padding-content' onClick={onClick}><img className='' src={clicked ? renderShoe() : platyOval} />{clicked ? <img className='' src={platyOval} />  : <img className='' src={renderShoe()} />}</div>);
    // tableCell.push(<td className='padding-content' onClick={onClick}><img className={clicked ? '' : 'hide-content'} data-key={key} src={key} /> <img className={clicked ? 'hide-content' : ''} src={platyOval} /></td>);
    // tableCell[currCell]=<td className='padding-content' onClick={onClick}>{clicked ? <img className='' src={renderShoe()} /> : <img className='' src={platyOval} />}</td>;
  }
  // console.log("hello");
  return tableCell;
}

function renderTable(column, row){
    // let currNumRow=0;
    // let currNumColumn=0;
    let elementArray=[];

    let hndleClick = event => {
      event.stopPropagation();
      event.preventDefault();
    };

    for(let currNumRow =0; currNumRow < row; currNumRow++){
      // elementArray['curr_row'+currNumRow]= <tr>{renderTableCell(column)}</tr>;
      elementArray.push(<tr onClick={hndleClick}>{renderTableCell(column)}</tr>);
      // currNumRow++;
    }
    return elementArray;
}
 
const GameBody = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px'}}>
        <table style={{display: 'flex', color: 'white', justifyContent:'center', alignItems:'center'}}>
          <tbody>
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