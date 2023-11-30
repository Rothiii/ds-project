import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import Escape from './Escape/Escape'
import Things from './Thing/Things'
import News from './News/News'
import { Analytics } from '@vercel/analytics/react'
const HomePage = () => {
    return (
        <div className="content">
            <Nav />
            <Hero />
            <Escape />
            <Things />
            {/* <News /> */}
            <Analytics />
        </div>
    );
}
 
export default HomePage;