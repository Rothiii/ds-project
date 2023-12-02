/* eslint-disable react/prop-types */
import NavBar from '../NavBar';

function Ttd({ Judul }) {
  return (
    <>
      <NavBar />
      <div className="flex justify-between pt-[15vh] md:pt-[10vw] mx-[10vw]">
        {/* Kolom kiri */}
        <div className="w-[50%]">
          <h1 className="text-[3vh] font-bold">
            {Judul}Warna Pleangi Tour & Travel
          </h1>
          <p className="text-[2vh] ">
            Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem.
            adsadadadadaddas ddsa asasdadasdasasdasd as das d /adadas asd as
            adsd saaasdasd ad asd as as ds adskl
          </p>
        </div>
        {/* Kolom kanan */}
        <div className="w-[35%]">
          <h1 className='font-bold'>Contact</h1>
          <div className="flex items-center">
            <img
              src="../icon _telephone_.png"
              alt="icon"
              className="h-[2vh] md:h-[30px]"
            />
            <p className="text-[2vh] pl-[2rem]">xxx - xxx -xxx</p>
          </div>
          <div className="flex items-center">
            <img
              src="../icon _mail_.png"
              alt="icon"
              className="h-[2vh] md:h-[30px]"
            />
            <p className="text-[2vh] pl-[1.5rem]">xxx - xxx -xxx</p>
          </div>
          <h1 className='font-bold'>Things To Do</h1>
          <div className="flex">
            <input type="checkbox" />
            <label htmlFor="checkbox">a</label>
            <input type="checkbox" />
            <label htmlFor="checkbox">b</label>
            <input type="checkbox" />
            <label htmlFor="checkbox">c</label>
          </div>
        </div>
      </div>
      <div className=" mx-[10vw] mt-[5vw]">
        <h1 className="font-bold">Gallery</h1>
        <div className="flex items-center justify-between">
          <img src="../icon _mail_.png" alt="" className="w-[30%] h-[25vw] md:h-[20vw]" />
          <img src="../icon _mail_.png" alt="" className="w-[30%] h-[30vw] md:h-[25vw]" />
          <img src="../icon _mail_.png" alt="" className="w-[30%] h-[25vw] md:h-[20vw]" />
        </div>
      </div>
      <footer />
    </>
  );
}

export default Ttd;
