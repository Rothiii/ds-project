import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import Escape from './Escape/Escape'
import Things from './Thing/Things'
import Pledge from './Pledge/Pledge'
import { Analytics } from '@vercel/analytics/react'

const HomePage = () => {
    return (
        <div className="content">
            <Nav />
            <Hero />
            <Escape />
            <Things />
            <Pledge />
            <Analytics />
        </div>
    );
}
 
export default HomePage;