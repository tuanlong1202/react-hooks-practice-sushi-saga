import React, { useEffect,useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  
  const [sushiList, setSushiList] = useState([]);
  const [emptyPlates,setPlates] = useState([]);
  const [guestMoney, setGuestMoney] = useState(100);
  
  useEffect(loadSushi,[]);
  
  function loadSushi() {
    fetch(API)
      .then(r=>r.json())
      .then((data)=>{
        setSushiList([...data]);
      })
      .catch((e)=>{
        console.error("Error: " + e)
      });
  }

  function addEmptyPlate(value,money) {
    if ((emptyPlates.indexOf(value) === -1) && ((guestMoney - money) >= 0)){
      setPlates([...emptyPlates,value]);
      setGuestMoney(guestMoney - money);
    }
  }
  
  return (
    <div className="app">
      <SushiContainer 
        list={sushiList}
        onHandlePlateClick={addEmptyPlate}
        plates={emptyPlates}
      />
      <Table plates={emptyPlates} moneyLeft={guestMoney} />
    </div>
  );
}

export default App;
