/* eslint-disable react/prop-types */
function Card({gambar, judul, desc}) {
    return (
      <div className="flex justify-start gap-6 ml-[6vw] w-[1000vw] xl:h-[8vw] xl:w-[30vw]">
        <div className="">
          {/* <h1>{gambar}</h1> */}
          <img src={gambar} alt="" className="rounded-2xl xl:rounded-3xl object-cover object-center w-[50vw] md:w-[25vw] xl:w-[10vw] xl:h-[8vw]"/>
        </div>
        <div className="w-[50vw] md:w-[60vw] xl:w-[16vw] h-[10vw] pr-[5vw] md:pr-[1vw] xl:pr-[0vw]">
          <h2 className="font-bold text-[4vw] md:text-[3vw] xl:text-[1.5vw] ">{judul}</h2>
          <h3 className="text-[2.9vw] md:text-[1.68vw] xl:text-[0.9vw] line-clamp-5 xl:line-clamp-4">{desc}</h3>
        </div>
      </div>
    )
  }
  
  export default Card