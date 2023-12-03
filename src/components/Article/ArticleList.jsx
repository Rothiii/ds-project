import React from 'react';
import { Link } from 'react-router-dom';
// import ArticlePage from './ArticlePage';

function ArticleList({ articleUrls }) {
  return (
    <div>
      {articleUrls.map((url, i) => (
        <div key={i}>
          <Link to={`/article/${encodeURIComponent(url.replace(/\./g,'<dot>'))}`}>Article {i + 1}</Link>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;