/* eslint-disable react/prop-types */
function Card({gambar, caption, judul, desc}) {
  return (
    <div className="w-[20rem]">
      <div className="bg-red-100">
        {/* <h1>{gambar}</h1> */}
        <img src={gambar} alt={caption} />
      </div>
      <h2 className="bg-red-500">{judul}</h2>
      <h3 className="bg-red-300">{desc}</h3>
    </div>
  )
}

export default Card