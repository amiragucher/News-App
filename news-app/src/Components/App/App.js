
import React, { useEffect, useState } from "react";
import './App.css';

  function App() {
const [data, setData] = useState([]);
useEffect(() => {
(async ()=>{
  // const response = await fetch (`${process.env.API_URL}?token=${process.env.API_TOKEN}&q=global`)
  // const data = await response.json();
  console.log(`${process.env.API_URL}?token=${process.env.API_TOKEN}&q=global`);
})()
}, [])

  return (
    <div className="App">
     <h1>News App</h1>
     
    </div>
  );
}

export default App;
