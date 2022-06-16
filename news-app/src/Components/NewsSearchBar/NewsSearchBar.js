export default function NewsSearchBar ({dataArticles}){
    return (
        <>
        {dataArticles.map ((article) =>
        <p>{article.title}</p>
        )}
        </>
    )
}
