import './App.css'
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
