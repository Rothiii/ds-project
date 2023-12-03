/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Card({ gambar, caption, judul, desc, to }) {
  return (
    <div className="p-2 w-[40vw] md:w-[35vw] lg:w-[20vw] xl:w-[18vw] rounded-2xl shadow-xl">
      <Link to={to}>
        <div className="">
          <img
            src={gambar}
            alt={caption}
            className="rounded-2xl xl:rounded-3xl object-cover object-center w-[40vw] md:w-[45vw] lg:w-[25vw] xl:w-[17vw] xl:h-[15vw]"
          />
        </div>
        <h1 className="font-bold text-[4vw] md:text-[2vw] xl:text-[1.5vw]">
          {judul}
        </h1>
        <p className="text-[2.9vw] md:text-[1.68vw] xl:text-[0.9vw] line-clamp-5 xl:line-clamp-4">
          {desc}
        </p>
      </Link>
    </div>
  );
}

export default Card;