import Card from './Card';
// import { DataEscape } from '../../Data/DataEscape';
import { Link } from 'react-router-dom';
function Escape({articles}) {
  return (
    <div className="">
      <h1 className="pl-[6vw] xl:pl-[8vw] my-[1rem] font-bold text-[7vw] md:text-[4.5vw] lg:text-[2vw]">
        Discover Balikpapan
      </h1>
      {/* Wrapper Kolom Kiri Kanan */}
      <div className="flex flex-col xl:flex-row justify-start gap-10 lg:pl-[1vw] xl:pl-[3vw]">
        {/* Kolom Kiri */}
        <div className="ml-[6vw] lg:ml-[5vw]">
          <img
            src="./eto.png"
            alt=""
            className="rounded-2xl xl:rounded-3xl object-cover object-center justify-center items-center h-[50vw] xl:h-[30vw] xl:w-[50vw]"
          />
        </div>
        {/* kolom kanan Sebagai content*/}
        <div className="flex flex-col justify-center items-start gap-5 lg:pl-[5vw] xl:pl-[1vw]">
          {articles.map(({data: article}, i) => {
            if (article == null) {
              return null;
            }
            return <div key={i} >
              <Link to={`/article/${btoa(article.url)}`}>
              <Card
                key={article.id}
                gambar={article.image}
                judul={article.title}
                desc={article.description}
              />
              </Link>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Escape;
