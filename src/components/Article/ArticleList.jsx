import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
// import ArticlePage from './ArticlePage';

function ArticleList({ articles }) {
  console.log({articles});
  return (
    <div>
      <NavBar />
      <div className="bg-local bg-cover bg-center h-[12vh] overflow-hidden">
      </div>
      <div className="flex justify-between items-end ">
                <p className="pl-[6vw] xl:pl-[8vw] my-[1rem] font-bold text-[6vw] md:text-[4vw] lg:text-[2vw]">
                Discover More About Balikpapan City!
                </p>
      </div>
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-y-5 pl-[4vw]  sm:pl-[5vw] lg:pl-[5vw] xl:pl-[7.5vw] justify-items-center">
      {articles.map(({ data: article }, i) => {
        if (article == null) {
          return null;
        }
        return         <div key={i} className='p-2 w-[40vw] md:w-[35vw] lg:w-[20vw] xl:w-[18vw] rounded-2xl shadow-xl'>
        <Link to={`/article/${btoa(article.url)}`}>
          <img
            src={article.image}
            alt={article.title}
            className="rounded-2xl xl:rounded-3xl object-cover object-center w-[40vw] md:w-[45vw] lg:w-[25vw] xl:w-[17vw] xl:h-[15vw]"
          />
          <h1 className="font-bold text-[4vw] md:text-[2vw] xl:text-[1.5vw]">
            {article.title}
          </h1>
          <p className="text-[2.9vw] md:text-[1.68vw] xl:text-[0.9vw] line-clamp-5 xl:line-clamp-4">
            {article.description}
          </p>     
        </Link>
      </div>

      }

      )}
      </div>
    </div>
  );
}

export default ArticleList;