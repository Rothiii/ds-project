// Perjanjian.jsx
import { useState, useEffect } from 'react';

// const data = ['Data 1', 'Data 2', 'Data 3', 'Data 4'];
const data = [
  {
    title: 'Janji Balikpapan',
    opening:
      'Jadilah Wisatawan Yang Bertanggung Jawab dan Mengambil Janji Balikpapan.',
    deskripsi: [
      'Saya berjanji untuk selalu menjaga kebersihan dan keindahan kota Balikpapan',
      'Saya berjanji untuk tidak membuang sampah sembarangan',
      'Saya berjanji untuk tidak merokok di tempat umum',
      'Saya berjanji untuk tidak membuang sampah di laut',
      'Saya berjanji untuk tidak membuang sampah di sungai',
    ],
    closing: 'Selamat berwisata di Balikpapan! dan Nikmati keindahan alamnya.',
  },
];

const Perjanjian = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(true);
  };

  useEffect(() => {
    const updateData = () => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsChecked(false);
    };

    if (isChecked) {
      setTimeout(updateData, 1000);
    }
  }, [isChecked, currentIndex]);

  // Mengecek apakah sudah mencapai akhir data
  const isLastDataDesc = currentIndex === data[0].deskripsi.length;

  return (
    <div className="h-[100vh] decoration-red-500 underline " style={{backgroundImage: "url(./viewbpp.jpg)"}}>
      {/* Opening */}
      <div>
        {currentIndex === -1 ? (
          <div className='text-center h-[50vh]'>
            <h1 className="text-[7.5vh] pt-[5vh]">{data[0].title}</h1>
            <p className='text-[4vh] pt-[1vh]'> {data[0].opening} </p>
          </div>
        ) : null}
      </div>
      {/* Menampilkan janji */}
      <div className="flex flex-col items-center ">
        {isLastDataDesc || currentIndex === -1 ? null : (
          <p className="text-[6vh] text-center h-[50vh] pt-[5vh]">
            {data[0].deskripsi[currentIndex]}
          </p>
        )}
        {/* Checkbox untuk memicu perubahan data */}
        {isLastDataDesc ? null : (
          <div className="flex flex-col items-center p-1 font-bold">
            <input
              type="checkbox"
              className="w-[6vh] h-[6vh] text-indigo-600"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox">Next</label>
          </div>
        )}
      </div>
      {/* Closing */}
      <div>
        {isLastDataDesc ? (
          <div className="flex flex-col bg-red-100 justify-between h-[100vh]">
            <p className="text-[6vh] text-center pt-[30vh]">
              {data[0].closing}
            </p>
            <a
              href="/"
              className="text-[3vh] text-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {'Back to Home'}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Perjanjian;
