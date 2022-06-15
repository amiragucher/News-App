import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?token=${process.env.REACT_APP_API_TOKEN}&q=global`
      );
      const data = await response.json();
      setData(data.articles);
      console.log(data);
    })();
  }, []);

  return (
    <div className="App">
      <h1>News App</h1>
    </div>
  );
}

export default App;
