import './App.css'
import HomePage from './components/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mailing from './components/Mailing'
import Article from './components/Article'
import Perjanjian from './pages/Perjanjian'
import About from './pages/About'
import HtgtPage from './components/howToGetThere/HtgtPage'
import FlightPage from './components/flights/FlightPage'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/get-in-touch',
      element: <Mailing />
    },
    {
      path: '/article',
      element: <Article />
    },
    {
      path: '/pledge',
      element: <Perjanjian />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/how-to-get-there',
      element: <HtgtPage />
    },
    {
      path: '/flights-to-balikpapan',
      element: <FlightPage />
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
