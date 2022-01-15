import React from "react";
import Article from "./Article.js"


function ArticleList(props) {
    const articles = props.posts
    console.log(articles)
    const articleElements = articles.map((article) => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>
    })

    return (
        <main>
            {articleElements}
        </main>
    )
};

export default ArticleList;