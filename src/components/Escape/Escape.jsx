function Escape() {
  return (
    <div className="w-full">
      <h1 className="ml-[10rem] my-[1rem] font-bold text-[45px]">Escape The Ordinary</h1>
      {/* Pembungkus Kolom Kiri Kanan */}
      <div className="flex justify-center gap-[5rem]">
        {/* Kolom Kiri */}
        <div>
          <div className="flex border-2 border-black h-[30vw] w-[50vw] justify-center items-center">
            <p>Gambar 1</p>
          </div>
        </div>
        {/* kolom kanan */}
        <div className="flex flex-col justify-evenly border-2 border-black h-[30vw] w-[20vw] ">
          <div className="flex justify-evenly">
            <div className="border-2 border-black">
              <p>Gambar 1 kanan</p>
            </div>
            <div>
              <h1>Judul</h1>
              <p>Deskripsi</p>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="border-2 border-black">
              <p>Gambar 2 kanan</p>
            </div>
            <div>
              <h1> Judul </h1>
              <p>Deskripsi</p>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="border-2 border-black">
              <p>Gambar 3 kanan</p>
            </div>
            <div>
              <h1>Judul</h1>
              <p>Deskripsi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Escape;
