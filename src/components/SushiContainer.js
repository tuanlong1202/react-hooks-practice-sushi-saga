import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({list, onHandlePlateClick, plates}) {
  const [startPosition, setStartPosition] = useState(0);
  
  function listToShow(){
    if (list.length < 4){
      return list;
    } else {
      let endPosition = startPosition + 4;
      let returnArray = list.slice(startPosition,endPosition);
      if (endPosition >= list.length) {
        returnArray = returnArray.concat(list.slice(0,(endPosition - list.length)));
      }
      return returnArray;
    }
  }

  function handleFill(){
    if (list.length >= 4){
      (startPosition < (list.length - 1)) ? setStartPosition(startPosition + 1) : setStartPosition(0);
    }
  }

  const sushiToDisplay = listToShow().map((item,index) =>{
    return (
    <Sushi key={index} sushi={item} handlePlateClick={onHandlePlateClick} emptyPlatesList={plates} />
    )
  })

  return (
    <div className="belt">
      {sushiToDisplay/* Render Sushi components here! */}
      <MoreButton onFill={handleFill} />
    </div>
  );
}

export default SushiContainer;
