import React from "react";

function Sushi({sushi, handlePlateClick, emptyPlatesList}) {
  const {id, img_url, name, price} = sushi;
  
  return (
    <div className="sushi">
      <div className="plate" onClick={() => { handlePlateClick(id,price)}}>
        {/* Tell me if this sushi has been eaten! */}
        {(emptyPlatesList.indexOf(id) !== -1) ? null : (
          <img
            src={img_url}
            alt={name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
