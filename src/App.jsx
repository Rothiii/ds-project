import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Escape from './components/Escape/Escape'
import Things from './components/Thing/Things'
import News from './components/News/News'
import { Analytics } from '@vercel/analytics/react'
import HomePage from './components/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mailing from './components/Mailing'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/get-in-touch',
      element: <Mailing />
    }
  ])
  return(
    <RouterProvider router={router}></RouterProvider>
    // <>
     

    //  <Nav />
    //  <Hero />
    //  <Escape />
    //  <Things />
    //  {/* <News /> */}
    //  <Analytics />
    // </>
  )
}

export default App
