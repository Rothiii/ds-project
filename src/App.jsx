import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero'
import Escape from './components/Escape/Escape'
import Things from './components/Thing/Things'
import News from './components/News/News'
import { Inject } from '@vercel/analytics/react'

function App() {

  return(
    <>
    <Inject>
     <Nav />
     <Hero />
     <Escape />
     {/* <Things />
     <News /> */}
    </Inject>
    </>
  )
}

export default App
