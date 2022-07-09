import {useState} from "react"

export default function NewsSearchBar ({setData}){
const [randomArticles, setRandomArticles] = useState("") 
const [searchInput, setSearchInput] = useState([])   
function handleClick(){
        let randomArticles = Math.floor(Math.random() *100);
        setRandomArticles(randomArticles);
        console.log("Random article")
        console.log(randomArticles)
    }
     const GetNewData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}?token=${process.env.REACT_APP_API_TOKEN}&q=${searchInput}`
        );
        const data = await response.json();
        setData(data.articles);
        console.log(data);
      };
    
    return (
        <>
      <button onClick={GetNewData}>Get Articles</button>
      <input type="text" onClick={handleClick} onChange={(e) =>{setSearchInput(e.target.value)}}/>
        </>
    )
    }


    