/* eslint-disable react/prop-types */
function News({ imgSrc, title, description, href }) {
  return (
    <div className="py-[7vh] mt-[5vw] lg:mt-[3vw] pr-[4vw] md:py-[0vh] pl-[4vw] sm:pl-[5vw] lg:pl-[5vw] xl:pl-[7.5vw] flex flex-col-reverse md:flex-row justify-start md:justify-between items-center" href={href}>
      <div className="flex flex-col pt-[5vh] md:pt-[0vh] md:w-[50vw] md:pb-[3vw]">
        <h1 className="text-[7vw] md:text-[2.5vw] xl:text-[2vw] font-bold uppercase">{title}</h1>
        <p className="py-[2vh] text-[5vw] md:text-[1.68vw] lg:text-[1.5vw]">{description}</p>
        <a className="btn-primary text-[5vw] md:text-[2vw] lg:text-[1.5vw] w-[90vw] md:w-[15vw] text-center" href={href}>More about</a>
      </div>
      <div className="">
        <img src={imgSrc} alt="News Image" className="px-5 rounded-2xl xl:rounded-3xl object-cover object-center h-[50vw] md:w-[50vw] md:h-[30vw] lg:h-[30vw] xl:h-[17vw] xl:h-[15vw]"/>
      </div>
    </div>
  );
}

export default News;
