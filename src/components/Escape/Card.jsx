/* eslint-disable react/prop-types */
function Card({gambar, judul, desc}) {
    return (
      <div className="flex justify-start gap-5 h-[8vw] w-[30vw]">
        <div className="">
          {/* <h1>{gambar}</h1> */}
          <img src={gambar} alt="" className="object-cover object-center w-[7vw] h-[7vw]"/>
        </div>
        <div className="w-[16vw] h-[7vw]">
          <h2 className="text-[20px]">{judul}</h2>
          <h3 className="text-[15px]">{desc}</h3>
        </div>
      </div>
    )
  }
  
  export default Card