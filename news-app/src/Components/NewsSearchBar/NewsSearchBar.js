import {useState} from "react"
import Style from "./NewsSearchBar.module.css"
import { Button } from "@nextui-org/react";

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
        <div className={Style.SearchContainer}>
      <Button className={Style.Button} onClick={GetNewData}>Get Articles</Button>
      <input className={Style.Input} type="text" onClick={handleClick} onChange={(e) =>{setSearchInput(e.target.value)}} placeholder="Search here"/>
        </div>
    )
    }


    