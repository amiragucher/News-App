import Style from "./NewsItem.module.css"

export default function NewsItem ({title, description, conttent, url, publisedAt, source, sourceName, sourceUrl,image}){
    return (
        <div className={Style.ArticlesContainer}>
         <h2 className={Style.ArticleTitle}>{title}</h2>
         <a href={sourceUrl}>
        <img className={Style.Image} src={image}  />
        </a>  
        </div>
        
    )}

 