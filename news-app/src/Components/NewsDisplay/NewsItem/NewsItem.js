export default function NewsItem ({title, description, conttent, url, publisedAt, source, sourceName, sourceUrl,image}){

    return (
        <div>
         <h2>{title}</h2>
         <a href={sourceUrl}>
        <img src={image}  />
        </a>  
        </div>
        
    )}

 