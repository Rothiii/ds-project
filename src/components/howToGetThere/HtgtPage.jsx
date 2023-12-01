import HtgtCard from "./htgtCard";
import { DataHtgt } from "../../Data/DataHtgt";
import NavBar from "../NavBar";
const HtgtPage = () => {
    return ( 
        <div className="content">
            <NavBar />
            
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-5 pl-[4vw]  sm:pl-[5vw] lg:pl-[5vw] xl:pl-[7.5vw] justify-items-center">
                {DataHtgt.map((item) => {
                return (
                    <HtgtCard
                    key={item.id}
                    reflink={item.reflink}
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    />
                );
                })}
            </div>
            
        </div>
     );
}
 
export default HtgtPage;