/* eslint-disable react/prop-types */
function Card({gambar, judul, desc}) {
    return (
      <div className="flex justify-start gap-6 ml-[6vw] lg:ml-[0vw] w-[90vw] xl:h-[8vw] xl:w-[30vw]">
        <div className="">
          {/* <h1>{gambar}</h1> */}
          <img src={gambar} alt="" className="rounded-2xl xl:rounded-3xl object-cover object-center w-[50vw] md:w-[25vw] xl:w-[12vw] xl:h-[8vw]"/>
        </div>
        <div className="w-[50vw] md:w-[60vw] xl:w-[16vw] h-[10vw] pr-[5vw] md:pr-[1vw] xl:pr-[0vw]">
          <h1 className="font-bold text-[4vw] md:text-[2vw] xl:text-[1.5vw] ">{judul}</h1>
          <p className="text-[2.9vw] md:text-[1.68vw] xl:text-[0.9vw] line-clamp-5 xl:line-clamp-4">{desc}</p>
        </div>
      </div>
    )
  }
  
  export default Card