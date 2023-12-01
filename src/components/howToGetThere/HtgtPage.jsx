import HtgtCard from './HtgtCard';
import { DataHtgt } from '../../Data/DataHtgt';
import Nav from '../Nav/Nav';
const HtgtPage = () => {
  return (
    <div className="content">
      <Nav />
      <div
        className="bg-local bg-cover bg-center h-[50vh] xl:h-[89vh] overflow-hidden"
        style={{ backgroundImage: 'url(./bpp.jpg)' }}
      >
        <h1 className="text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] lg:mx-[10rem] pt-[7rem] lg:pr-[30vw] xl:pr-[40vw] px-[2rem] md:pt-[6rem] text-white text-center lg:text-left font-bold">
          How to Get to Balikpapan City
        </h1>
      </div>

      <div className="flex items-end justify-between ">
        <p className="pl-[6vw] xl:pl-[8vw] my-[1rem] font-bold text-[6vw] md:text-[4vw] lg:text-[2vw]">
          Accomodations Available
        </p>
        {/* <p className='pr-[1.5rem] xl:pr-[6rem] my-[1rem] font-bold text-[2.9vw] md:text-[1.68vw] xl:text-[0.9vw]'>More Things To Do </p> */}
      </div>
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-y-5 pl-[4vw]  sm:pl-[5vw] lg:pl-[5vw] xl:pl-[7.5vw] justify-items-center">
        {DataHtgt.map((item) => {
          return (
            <HtgtCard
              key={item.id}
              reflink={item.reflink}
              image={item.image}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HtgtPage;
