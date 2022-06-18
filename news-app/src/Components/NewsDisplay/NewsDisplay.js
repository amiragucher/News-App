export default function NewsDisplay ({data}){
    return (
        <div>
        <ol className="articles">
    {/* {data.map((data) => {
        return( */}
            <li 
        title={data.title}
        description={data.description}
        content={data.content}
        url={data.url}
        image={data.image}
        // publishedAt={data.publishedAt}
        source={data.source}>
        {/* // name={data.source.name}
        // sourceUrl={data.source.url} > */}

        </li>
        {/* ) */}
    {/* })} */}
    </ol>
    </div>
    )
   
}

