import React from "react";

function Table({ plates, moneyLeft }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((item, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${moneyLeft/* Give me how much money I have left */} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
