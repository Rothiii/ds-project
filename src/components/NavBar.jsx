import Button from '../components/Nav/Button'
function NavBar() {
  return (
    <div className="navbar bg-base-100 absolute flex justify-around py-[1.5rem] md:px-[4rem]">
      <div className="hidden navbar-start lg:inline-flex">
        <a className="text-xl btn btn-ghost" href='/'>
          <img src="bghitam.png" alt="Eksplore Logo Hitam" style={{height: "170px", width: "auto", marginTop: "-65px"}}/>
          {/* untuk background terang */}
        </a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal text-black font-semibold text-[3vw] md:text-[2vw] lg:text-[1.2vw] p-[0px]">
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
                <li className='hover:text-black'>
                  <a>Things To Do</a>
                </li>
                <li className='hover:text-black'>
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

export default NavBar;









// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Dashboard', href: '/', current: true },
//   { name: 'About', href: '/about', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function NavBar() {
//   return (
//     <Disclosure as="nav" className="bg-gradient-to-b from-emerald-800 to-emerald-500">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img
//                     className="h-8 w-auto"
//                     // input logo di sini
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex justify-items-center space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'text-white font-semibold text-[3vw] md:text-[2vw] lg:text-[1.2vw] p-[0px]' : 'text-white font-semibold text-[3vw] md:text-[2vw] lg:text-[1.2vw] p-[0px]',
//                           'rounded-md px-3 py-2 text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block rounded-md px-3 py-2 text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }