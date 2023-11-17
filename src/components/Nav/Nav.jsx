function Nav(){
  return(
    <div className="absolute flex justify-around py-[1rem] w-full">
      <h1>Explore Balikpapan</h1>
      <ul className="flex gap-20 text-white font-bold">
        <li><a href="www.facebook.com">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Upcoming Packages</a></li>
      </ul>
      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg">Get In Touch</button>
    </div>
  )
}

export default Nav;