import './App.css'
import HomePage from './components/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mailing from './components/Mailing'
import Perjanjian from './pages/Perjanjian'
import About from './pages/About'
import HtgtPage from './components/howToGetThere/HtgtPage'
import FlightPage from './components/flights/FlightPage'
import InfoThings from './components/Thing/InfoThings'
import TaxiPage from './components/Taxi/TaxiPage'
import FerryPage from './components/Ferry/FerryPage'
import ArticlePage from './components/Article/ArticlePage'
import ArticleList from './components/Article/ArticleList'
import { useEffect, useState } from 'react'
function App() {
  const articleUrls = [
    "https://blog.tiket.com/en/balikpapan-tourist-attractions/",
    "https://www.difawisata.com/articles/32-must-visit-attractions-in-balikpapan-while-on-vacation/"
  ]

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await Promise.all(articleUrls.map(async (url) => {
          const response = await fetch(`https://article-extractor2.p.rapidapi.com/article/parse?url=${encodeURIComponent(url)}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
              'X-RapidAPI-Host': 'article-extractor2.p.rapidapi.com'
            }
          });

          if (response.ok) {
            return await response.json();
          } else {
            console.error(`Failed to fetch article from ${url}`)
          }
        }));
        setArticles(fetchedArticles.filter(it => it != null));
      } catch (error) {
          console.error(`Error while fetching article:`, error)
      }
    };
    fetchArticles();
  }, []);



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
      path: '/ThingsToDo/:id',
      element: <InfoThings />
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
      element: <ArticleList articles={articles} />
    },
    {
      path: 'article/:articleUrl',
      element: <ArticlePage articles={articles}/>
    },
    // {
    //   path: '*',
    //   element: <h1>404 Page Not Found</h1>
    // }
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
