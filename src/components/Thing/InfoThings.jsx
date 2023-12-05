/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import { useParams } from 'react-router-dom';
// import { DataThings } from '../../Data/DataThings';

function InfoThings({touristAttracts}) {
  const { id: touristId } = useParams();
  console.log({touristId, touristAttracts});

  const [attract, setAttract] = useState(null);

  useEffect(() => {
    const fetchAttract = async () => {
      const foundAttract = touristAttracts.find(t => t?.results?.location_id === touristId);
      // console.log({foundAttract,})
      setAttract(foundAttract?.results)
    }
    fetchAttract();
  }, [touristId, attract, touristAttracts])
if(attract == null) {
  return <div>Loading...</div>
}
  // const selectedArticle = DataThings.find(article => article.id === parseInt(id));
  // if (!selectedArticle) {
  //   // Jika Things tidak ditemukan, tampilkan pesan atau redirect
  //   return <h1>Article not found</h1>;
  // }
  return (
    <>
      <NavBar />
      <div className="flex justify-between pt-[15vh] md:pt-[10vw] mx-[10vw]">
        {/* Kolom kiri */}
        <div className="w-[50%]">
          <h1 className="text-[3vh] font-bold">
            {attract.name}
          </h1>
          <p className="text-[2vh] ">
          {attract.description}
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
              {attract.phone}
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="../icon _mail_.png"
              alt="icon"
              className="h-[2vh] md:h-[30px]"
            />
            <p className="text-[2vh] pl-[0.5rem] md:pl-[1.5rem]">
              {attract.website}
            </p>
          </div>
          {/* <h1 className="font-bold">Things To Do</h1>
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
          </div> */}
        </div>
      </div>
      <div className=" mx-[10vw] mt-[5vw]">
        <h1 className="font-bold">Gallery</h1>
        <div className="flex items-center justify-between">
          <img
            src={attract.photo.images.small.url}
            alt={attract.name}
            className="w-[30%] h-[25vw] md:h-[20vw]"
          />
          <img
            src={attract.photo.images.small.url}
            alt={attract.name}
            className="w-[30%] h-[30vw] md:h-[25vw]"
          />
          <img
            src={attract.photo.images.small.url}
            alt={attract.name}
            className="w-[30%] h-[25vw] md:h-[20vw]"
          />
        </div>
      </div>
      <footer />
    </>
  );
}

export default InfoThings;