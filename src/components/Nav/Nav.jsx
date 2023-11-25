import Button from './Button.jsx'
function Nav() {
  return (
    <div className="navbar bg-base-100 absolute flex justify-around py-[1.5rem] md:px-[4rem]">
      <div className="navbar-start hidden lg:inline-flex">
        <a className="btn btn-ghost text-xl">LOGO</a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal text-white font-semibold text-[3vw] md:text-[2vw] lg:text-[1.2vw] p-[0px]">
          <li className='hover:text-black'>
            <a>Home</a>
          </li>
          <li className='hover:text-black'>
            <a>About</a>
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
            <a>Upcomming Packages</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end xl:hidden">
        <a className="btn btn-ghost bg-orange-500 text-white ">Get In Touch</a>
        <div className="dropdown text-left">
          <label tabIndex={0} className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
      <div className='navbar-end hidden lg:inline-flex '>
        <Button />
      </div>
    </div>
  );
}

export default Nav;
