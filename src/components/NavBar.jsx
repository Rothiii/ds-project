import Button from '../components/Nav/Button'
function NavBar() {
  return (
    <div className="navbar bg-base-100 absolute flex justify-around py-[1.5rem] md:px-[4rem]">
      <div className="hidden navbar-start lg:inline-flex">
        <a className="text-xl btn btn-ghost">LOGO</a>
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
//           <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="relative flex items-center justify-between h-16">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
//                 <div className="flex items-center flex-shrink-0">
//                   <img
//                     className="w-auto h-8"
//                     // input logo di sini
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4 justify-items-center">
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
//             <div className="px-2 pt-2 pb-3 space-y-1">
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