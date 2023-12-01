import Card from './Card';

function Things() {
  return (
    <div className="my-[1rem]">
      <div className="flex justify-between items-end ">
        <p className="pl-[6vw] xl:pl-[8vw] my-[1rem] font-bold text-[6vw] md:text-[4vw] lg:text-[2vw]">
          Things To Do In Balikpapan
        </p>
        {/* <p className='pr-[1.5rem] xl:pr-[6rem] my-[1rem] font-bold text-[2.9vw] md:text-[1.68vw] xl:text-[0.9vw]'>More Things To Do </p> */}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 pl-[4vw] sm:pl-[5vw] lg:pl-[5vw] xl:pl-[7.5vw] justify-items-start">
        <Card
          gambar={'./ttd.jpg'}
          caption={'logo'}
          judul={'Judul 1'}
          desc={
            'Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem. adsadadadadaddas ddsa asasdadasdasasdasd as das d  /adadas asd as adsd saaasdasd ad asd as as ds adskl'
          }
        />
        <Card
          gambar={'./ttd.jpg'}
          caption={'logo'}
          judul={'Judul 2'}
          desc={
            'Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem. adsadadadadaddas ddsa asasdadasdasasdasd as das d  /adadas asd as adsd saaasdasd ad asd as as ds adskl'
          }
        />
        <Card
          gambar={'./ttd.jpg'}
          caption={'logo'}
          judul={'Judul 3'}
          desc={
            'Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem. adsadadadadaddas ddsa asasdadasdasasdasd as das d  /adadas asd as adsd saaasdasd ad asd as as ds adskl'
          }
        />
        <Card
          gambar={'./ttd.jpg'}
          caption={'logo'}
          judul={'Judul 4'}
          desc={
            'Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem. adsadadadadaddas ddsa asasdadasdasasdasd as das d  /adadas asd as adsd saaasdasd ad asd as as ds adskl'
          }
        />
        {/* <Card
          gambar={'./ttd.jpg'}
          judul={'Judul 5'}
          desc={
            'Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem. adsadadadadaddas ddsa asasdadasdasasdasd as das d  /adadas asd as adsd saaasdasd ad asd as as ds adskl'
          }
        />
        <Card
          gambar={'./ttd.jpg'}
          judul={'Judul 6'}
          desc={
            'Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem. adsadadadadaddas ddsa asasdadasdasasdasd as das d  /adadas asd as adsd saaasdasd ad asd as as ds adskl'
          }
        />
        <Card
          gambar={'./ttd.jpg'}
          judul={'Judul 7'}
          desc={
            'Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem. adsadadadadaddas ddsa asasdadasdasasdasd as das d  /adadas asd as adsd saaasdasd ad asd as as ds adskl'
          }
        />
        <Card
          gambar={'./ttd.jpg'}
          judul={'Judul 8'}
          desc={
            'Sun qui doloremque quia. Quisquam voluptatem voluptatem voluptatem. adsadadadadaddas ddsa asasdadasdasasdasd as das d  /adadas asd as adsd saaasdasd ad asd as as ds adskl'
          }
        /> */}
      </div>
    </div>
  );
}

export default Things;
