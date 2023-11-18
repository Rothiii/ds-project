function Nav() {
  return (
    // <div className="absolute flex justify-around py-[1.5rem] w-full">
    //   <h1>Explore Balikpapan</h1>
    //   <ul className="flex gap-20 text-white font-medium text-[25px]">
    //     <li><a href="">Home</a></li>
    //     <li><a href="/about">About</a></li>
    //     <li><a href="">Services</a></li>
    //     <li><a href="">Upcoming Packages</a></li>
    //   </ul>
    //   <button className="bg-orange-600 text-white px-4 py-2 rounded-lg">Get In Touch</button>

    // </div>
    <div className="navbar bg-base-100 absolute flex justify-around py-[1.5rem] md:px-[4rem]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Upcoming Packages</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">LOGO</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Upcomming Packages</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

export default Nav;
