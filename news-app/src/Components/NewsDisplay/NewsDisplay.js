import NewsItem from "./NewsItem/NewsItem"


export default function NewsDisplay ({data}){
    return (
        <div>
            {
            data.map((item) => {
            return(
                <NewsItem
                title={item.title}
                description={item.description}
                content={item.content}
                url={item.url}
                publishedAt={item.publishedAt}
                source={item.source}
                sourceName={item.source.name}
                sourceUrl={item.source.url}
                />
            )
            })
            }
          
        </div>
        
    )}


