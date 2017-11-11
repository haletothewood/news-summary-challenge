'use strict';

(function (exports) {
  exports.ArticleListView = function (articleList) {
    articles = articleList.allArticles();

    function allArticlesHTML() {
      html = '<div><ul>';
      articles.map((article) => {
        html += '<li><div><p id="headlines">' + headlineHTML(article) + '</p>'
        + '<img src="' + imagesHTML(article) + '"><br>'
        + '<p><a href="' + urlHTML(article) + '">Click To Read</a></p></div></li>'
      });
      return html + "</ul></div>";
    }

    function headlineHTML(article) {
      return article.showHeadline()
    }

    function urlHTML(article) {
      return article.showUrlToFullStory()
    }

    function imagesHTML(article) {
      return article.featureImage()
    }

    return {
      allArticlesHTML: allArticlesHTML
    }

    var articles, html
  }
})(this);