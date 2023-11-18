function Nav(){
  return(
    <div className="absolute flex justify-around py-[1.5rem] w-full">
      <h1>Explore Balikpapan</h1>
      <ul className="flex gap-20 text-white font-medium text-[25px]">
        <li><a href="">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Upcoming Packages</a></li>
      </ul>
      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg">Get In Touch</button>
      
    </div>
  )
}

export default Nav;