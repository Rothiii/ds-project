import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import Escape from './Escape/Escape'
import Things from './Thing/Things'
import Pledge from './Pledge/Pledge'
import { Analytics } from '@vercel/analytics/react'
import Footer from './Footer'

const HomePage = ({articles, touristAttracts}) => {
    return (
        <div className="content">
            <Nav />
            <Hero />
            <Escape articles={articles}/>
            <Things touristAttracts={touristAttracts}/>
            <Pledge />
            <Analytics />
            <Footer />
        </div>
    );
}
 
export default HomePage;