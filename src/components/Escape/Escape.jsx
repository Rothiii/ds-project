import Card from "./Card";

function Escape() {
  return (
    <div className="">
      <h1 className="pl-[1.5rem] xl:pl-[6rem] my-[1rem] font-bold text-[7vw] md:text-[5vw] lg:text-[2vw]">Escape The Ordinary</h1>
      {/* Wrapper Kolom Kiri Kanan */}
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-1">
        {/* Kolom Kiri */}
        <div className="ml-[5vw]">
          <img 
            src="./eto.png" 
            alt=""
            className="rounded-2xl xl:rounded-3xl object-cover object-center justify-center items-center h-[50vw] xl:h-[30vw] xl:w-[50vw]"/>
        </div>
        {/* Content */}
        {/* kolom kanan */}
        <div className="flex flex-col justify-center gap-5 xl:ml-[vw] xl:h-[30vw] xl:w-[25vw]">
          <Card
            gambar="./eto2.png"
            judul="Lorem ipsum"
            desc="Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem. adsadadadadaddas ddsa asasdadasdasasdasd as das d  /adadas asd as adsd saaasdasd ad asd as as ds adskl"
          />
          <Card
            gambar="./eto2.png"
            judul="Lorem ipsum"
            desc="Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem."
          />
          <Card
            gambar="./eto2.png"
            judul="Lorem ipsum"
            desc="Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem."
          />
        </div>
      </div>
    </div>
  );
}

export default Escape;
