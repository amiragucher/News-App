import NewsSearchBar from "../NewsSearchBar/NewsSearchBar"

export default function NewsDisplay ({data}){
    return (
        <div>
        {
        data.map((data) => {
        return(  
            <NewsSearchBar
            title={data.title}
            description={data.description}
            content={data.content}
            url={data.url}
            image={data.image}
            publishedAt={data.publishedAt}
            source={data.source}
        // name={data.source.name}
        // sourceUrl={data.source.url} 
        /> 
           
        
         ) 
     })
     } 
    
    </div>
    )
   
}

