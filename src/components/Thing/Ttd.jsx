/* eslint-disable react/prop-types */
import NavBar from '../NavBar';
import { useParams } from 'react-router-dom';
import { DataArtikel } from '../../Data/DataThings';

function Ttd() {
  const { id } = useParams();
  const selectedArticle = DataArtikel.find(article => article.id === parseInt(id));
  if (!selectedArticle) {
    // Jika Things tidak ditemukan, tampilkan pesan atau redirect
    return <h1>Article not found</h1>;
  }
  
  return (
    <>
      <NavBar />
      <div className="flex justify-between pt-[15vh] md:pt-[10vw] mx-[10vw]">
        {/* Kolom kiri */}
        <div className="w-[50%]">
          <h1 className="text-[3vh] font-bold">
            {selectedArticle.judul}
          </h1>
          <p className="text-[2vh] ">
          {selectedArticle.desc}
          </p>
        </div>
        {/* Kolom kanan */}
        <div className="w-[35%]">
          <h1 className="font-bold">Contact</h1>
          <div className="flex items-center">
            <img
              src="../icon _telephone_.png"
              alt="icon"
              className="h-[2vh] md:h-[30px]"
            />
            <p className="text-[2vh] pl-[0.5rem] md:pl-[2rem]">
              xxx - xxx -xxx
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="../icon _mail_.png"
              alt="icon"
              className="h-[2vh] md:h-[30px]"
            />
            <p className="text-[2vh] pl-[0.5rem] md:pl-[1.5rem]">
              xxx - xxx -xxx
            </p>
          </div>
          <h1 className="font-bold">Things To Do</h1>
          <div className="flex flex-col text-[2vh]">
            <div>
              <input type="checkbox" />
              <label htmlFor="checkbox">Berenang</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="checkbox">Bermain Pasir</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="checkbox">Spot foto</label>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-[10vw] mt-[5vw]">
        <h1 className="font-bold">Gallery</h1>
        <div className="flex items-center justify-between">
          <img
            src="../icon _mail_.png"
            alt=""
            className="w-[30%] h-[25vw] md:h-[20vw]"
          />
          <img
            src="../icon _mail_.png"
            alt=""
            className="w-[30%] h-[30vw] md:h-[25vw]"
          />
          <img
            src="../icon _mail_.png"
            alt=""
            className="w-[30%] h-[25vw] md:h-[20vw]"
          />
        </div>
      </div>
      <footer />
    </>
  );
}

export default Ttd;
