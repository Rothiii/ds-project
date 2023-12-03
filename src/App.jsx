import './App.css'
import HomePage from './components/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mailing from './components/Mailing'
import Perjanjian from './pages/Perjanjian'
import About from './pages/About'
import HtgtPage from './components/howToGetThere/HtgtPage'
import FlightPage from './components/flights/FlightPage'
import TaxiPage from './components/Taxi/TaxiPage'
import FerryPage from './components/Ferry/FerryPage'
import ArticlePage from './components/Article/ArticlePage'
import ArticleList from './components/Article/ArticleList'
function App() {
  const articleUrls = [
    "https://blog.tiket.com/en/balikpapan-tourist-attractions/",
    "https://www.difawisata.com/articles/32-must-visit-attractions-in-balikpapan-while-on-vacation/"
  ]
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
      element: <ArticlePage />
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
    },
    {
      path: 'taxis-and-buses',
      element: <TaxiPage />
    },
    {
      path: 'ferries-to-balikpapan',
      element: <FerryPage />
    },
    {
      path: 'discover-balikpapan',
      element: <ArticleList articleUrls={articleUrls} />
    },
    {
      path: 'article/:articleUrl',
      element: <ArticlePage />
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
