import Button from './Button.jsx'
function Nav() {
  return (
    <div className="navbar bg-base-100 absolute flex justify-around py-[1.5rem] md:px-[4rem]">
      <div className="hidden navbar-start lg:inline-flex">
        <a className="text-xl btn btn-ghost">LOGO</a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal text-white font-semibold text-[3vw] md:text-[2vw] lg:text-[1.2vw] p-[0px]">
          <li className='hover:text-gray-300'>
            <a href='/'>Home</a>
          </li>
          <li className='hover:text-gray-300'>
            <a href='/about'>About</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className='hover:text-gray-300'>Services</summary>
              <ul className="p-2 text-black bg-zinc-300/50">
                <li className='hover:text-gray-600'>
                  <a>Things To Do</a>
                </li>
                <li className='hover:text-gray-600'>
                  <a>Discover Balikpapan</a>
                </li>
              </ul>
            </details>
          </li>
          <li className='hover:text-gray-300'>
            <a href='/how-to-get-there'>How To get There</a>
          </li>
        </ul>
      </div>
      <div className='hidden navbar-end lg:inline-flex '>
        <Button />
      </div>
    </div>
  );
}

export default Nav;
