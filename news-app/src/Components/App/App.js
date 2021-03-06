import React, { useEffect, useState } from "react";
import NewsDisplay from "../NewsDisplay/NewsDisplay";
import NewsSearchBar from "../NewsSearchBar/NewsSearchBar";
import Title from "../Title/Title";
import Animation from "../Animation/Animation";
import Style from "../Title/Title.module.css"
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
      <div className={Style.TitleBannerContainer}>
    <Animation/>
    <Title/>
    </div>
    <NewsSearchBar setData={setData} /> 
    <NewsDisplay data={data} />
  </div>
  );
}

export default App;
