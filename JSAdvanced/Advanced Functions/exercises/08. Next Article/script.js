function getArticleGenerator(articles) {
    let content = document.getElementById('content');
    function showNext() {
        if (articles.length) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            content.appendChild(article);
        }
    }
    return showNext
}


