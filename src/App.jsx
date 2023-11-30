import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Escape from './components/Escape/Escape'
import Things from './components/Thing/Things'
import News from './components/News/News'
import { Analytics } from '@vercel/analytics/react'
import Perjanjian from './pages/Perjanjian'

function App() {

  return(
    <>
     
     <Nav />
     <Hero />
     <Escape />
     <Things />
     {/* <News /> */}
     <Perjanjian />
     <Analytics />
    </>
  )
}

export default App
