import Button from "../Nav/Button.jsx"

function Hero() {
  return (
    <div className="bg-local bg-cover bg-center h-[65vh] xl:h-[89vh] overflow-hidden" style={{backgroundImage: "url(./hompage-bg.svg)"}}>
        {/* <Nav /> */}
        <h1 className="text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] lg:mx-[10rem] pt-[7rem] xl:pr-[30vw] px-[2rem] md:pt-[6rem] text-white text-center lg:text-left font-bold">
            No matter where you’re going to, we’ll take you there and discover Balikpapan City!
        </h1>
        <div className="flex justify-center items- mt-[10vh] lg:hidden ">
          <Button />
        </div>
    </div>
  )
}

export default Hero