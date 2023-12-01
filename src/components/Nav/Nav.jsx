import Button from './Button.jsx'
function Nav() {
  return (
    <div className="navbar bg-base-100 absolute flex justify-around py-[1.5rem] md:px-[4rem]">
      <div className="hidden navbar-start lg:inline-flex">
        <a className="text-xl btn btn-ghost">LOGO</a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal text-white font-semibold text-[3vw] md:text-[2vw] lg:text-[1.2vw] p-[0px]">
          <li className='hover:text-black'>
            <a href='/'>Home</a>
          </li>
          <li className='hover:text-black'>
            <a href='/about'>About</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className='hover:text-black'>Services</summary>
              <ul className="p-2 text-black bg-zinc-300/50">
                <li className='hover:text-white'>
                  <a>Things To Do</a>
                </li>
                <li className='hover:text-white'>
                  <a>Discover Balikpapan</a>
                </li>
              </ul>
            </details>
          </li>
          <li className='hover:text-black'>
            <a href='/how-to-get-there'>How To get There</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end xl:hidden">
        <a className="text-white bg-orange-500 btn btn-ghost ">Get In Touch</a>
        <div className="text-left dropdown">
          <label tabIndex={0} className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" flex justify menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-black"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
              <ul className="p-2">
                <li>
                  <a>Things To do</a>
                </li>
                <li>
                  <a>Discover Balikpapan</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Upcoming Packages</a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className='hidden navbar-end lg:inline-flex '>
        <Button />
      </div>
    </div>
  );
}

export default Nav;
