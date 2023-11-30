// Perjanjian.jsx
import { useState, useEffect } from 'react';

const data = ['Data 1', 'Data 2', 'Data 3', 'Data 4'];

const Perjanjian = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  }, [isChecked]);

  // Mengecek apakah sudah mencapai akhir data
  const isLastData = currentIndex === data.length;

  return (
    <div className="">
      {/* Menampilkan data sesuai dengan indeks yang sedang ditampilkan */}
      {isLastData ? null : (
        <p className="transition-opacity transition-transform duration-1000 ease-in-out transform opacity-100 translate-x-100">
          {data[currentIndex]}
        </p>
      )}

      {/* Checkbox untuk memicu perubahan data */}
      {isLastData ? null : (
        <div className="p-1 mx-2 font-bold bg-red-100">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox">Next Data</label>
        </div>
      )}
    </div>
  );
};

export default Perjanjian;
