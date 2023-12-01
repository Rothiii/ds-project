
function HtgtCard({reflink, image, title, desc}) {
    return ( 
        <a href={reflink} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img className="rounded-t-lg" src={image} alt="" />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        </a>


     );
}

export default HtgtCard;
