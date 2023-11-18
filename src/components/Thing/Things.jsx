import Card from './Card';

function Things() {
  return (
    <div className='mt-[2rem]'>
      <div className="mb-[2rem] flex justify-evenly">
        <h1>Things To Do In Balikpapan</h1>
        <h2>More Things To Do </h2>
      </div>
      <div className='grid grid-cols-4 gap-6 place-items-center'>
        <Card gambar={"./vite.sv"} judul={"Judul 1"} desc={"Desc 1"}/>
        <Card gambar={"gambar2"} judul={"Judul 2"} desc={"Desc 2"}/>
        <Card gambar={"gambar3"} judul={"Judul 3"} desc={"Desc 3"}/>
        <Card gambar={"gambar4"} judul={"Judul 4"} desc={"Desc 4"}/>
        <Card gambar={"gambar5"} judul={"Judul 5"} desc={"Desc 5"}/>
        <Card gambar={"gambar6"} judul={"Judul 6"} desc={"Desc 6"}/>
        <Card gambar={"gambar7"} judul={"Judul 7"} desc={"Desc 7"}/>
        <Card gambar={"gambar8"} judul={"Judul 8"} desc={"Desc 8"}/>
      </div>
    </div>
  );
}

export default Things;
