import Card from "./Card";

function Escape() {
  return (
    <div className="w-full">
      <h1 className="ml-[15rem] my-[1rem] font-bold text-[45px]">Escape The Ordinary</h1>
      {/* Pembungkus Kolom Kiri Kanan */}
      <div className="flex justify-center">
        {/* Kolom Kiri */}
        <div className="">
          <img 
            src="./eto.png" 
            alt=""
            className="object-cover object-center h-[30vw] w-[50vw]"/>
        </div>
        {/* kolom kanan */}
        <div className="flex flex-col justify-center gap-5 ml-[3vw] h-[30vw] w-[25vw]">
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
