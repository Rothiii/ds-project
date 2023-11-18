// import Nav from "./navbar"

function Hero() {
  return (
    <div className="bg-local bg-cover bg-center h-[65vh] xl:h-[89vh] w-screen" style={{backgroundImage: "url(./hompage-bg.svg)"}}>
        {/* <Nav /> */}
        <h1 className="text-[8vw] md:text-[5vh] md:mx-[8rem] pt-[7rem] xl:pr-[40rem] px-[2rem] md:pt-[6rem] text-white text-center md:text-left font-bold">
            No matter where you’re going to, we’ll take you there and discover Balikpapan City!
        </h1>
    </div>
  )
}

export default Hero