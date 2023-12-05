import FerryCard from "./FerryCard";
import { DataFerry } from "../../Data/DataFerry";
import NavBar from "../NavBar";
import Footer from "../Footer";
const FerryPage = () => {
    return ( 
        <div className="content">
            <NavBar />
            <div className="bg-local bg-cover bg-center h-[6vh] overflow-hidden">
            </div>
            
            <div className="flex justify-between items-end ">
                <p className="pl-[6vw] xl:pl-[8vw] my-[1rem] font-bold text-[6vw] md:text-[4vw] lg:text-[2vw]">
                Check Out Available Ferries
                </p>
                {/* <p className='pr-[1.5rem] xl:pr-[6rem] my-[1rem] font-bold text-[2.9vw] md:text-[1.68vw] xl:text-[0.9vw]'>More Things To Do </p> */}
            </div>
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-y-5 pl-[4vw]  sm:pl-[5vw] lg:pl-[5vw] xl:pl-[7.5vw] justify-items-center">
                {DataFerry.map((item) => {
                return (
                    <FerryCard
                    key={item.id}
                    reflink={item.reflink}
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    />
                );
                })}
            </div>
            <Footer />
        </div>
     );
}
 
export default FerryPage;