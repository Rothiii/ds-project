import Card from './Card';
// import { DataThings } from '../../Data/DataThings';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Things({touristAttracts}) {
  console.log({touristAttracts})
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >820);
  // const [Data, setData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 820);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  // useEffect(() => {
  //   setData(DataThings.slice(0, isDesktop ? 8 : 4));
  // }, [isDesktop]);

  return (
    <div className="my-[1rem]">
      <div className="flex items-end justify-between ">
        <p className="pl-[6vw] xl:pl-[8vw] my-[1rem] font-bold text-[6vw] md:text-[4vw] lg:text-[2vw]">
          Things To Do In Balikpapan
        </p>
        {/* <p className='pr-[1.5rem] xl:pr-[6rem] my-[1rem] font-bold text-[2.9vw] md:text-[1.68vw] xl:text-[0.9vw]'>More Things To Do </p> */}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 pl-[4vw] sm:pl-[5vw] lg:pl-[5vw] xl:pl-[7.5vw] justify-items-start">
        {touristAttracts.map(({results: attract}, i) => {
          if (attract == null) {
            return null;
          }
          console.log(attract)
          
          return  <div key={i}>
          <Card
            key={attract.location_id}
            gambar={attract.photo.images.small.url}
            judul={attract.name}
            desc={attract.description}
            to={`/ThingsToDo/${attract.location_id}`}
          />
        </div>
        })}
      </div>
    </div>
  );
}

export default Things;