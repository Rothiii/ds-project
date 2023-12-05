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
import ThingsList from './components/Thing/ThingsList'
function App() {
  const articleUrls = [
    "https://blog.tiket.com/en/balikpapan-tourist-attractions/",
    "https://www.difawisata.com/articles/32-must-visit-attractions-in-balikpapan-while-on-vacation/",
    "https://www.smartertravel.com/balikpapan-nightlife-clubs-bars-nightlife-tips/"
    ]
  
  const attractsId = [
    "8797423",
    "8797454",
    "8797463"
  ]

  const [articles, setArticles] = useState([]);
  const [touristAttracts,setTouristAttracts] = useState([]);

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


  useEffect(() => {
    const fetchAttracts = async () => {
      try {
        const fetchedAttracts = await Promise.all(attractsId.map(async (id) => {
          const response = await fetch(`https://tourist-attraction.p.rapidapi.com/detail`,
          {
            method: 'POST',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
              'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com'
            },
            body: new URLSearchParams({
              location_id: id,
              language: 'en_US',
              currency: 'USD'
            })
          
          });
          if (response.ok) {
            return await response.json();
          } else {
            console.error(`Failed to fetch tourist attraction spot with id: ${id}`)
          }
        }));
        setTouristAttracts(fetchedAttracts.filter(it => it != null));
      } catch (error) {
          console.error(`Error while fetching data:`, error)
      }
    };
    fetchAttracts();
    console.log(touristAttracts)
  }, []);


  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage articles={articles} touristAttracts={touristAttracts} />
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
      element: <InfoThings touristAttracts={touristAttracts} />
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
    {
      path: 'Things-To-Do',
      element: <ThingsList touristAttracts={touristAttracts} />
    }
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
