
function HtgtCard({reflink, image, title, desc}) {
    return ( 
            <a href={reflink}>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl dark:hover:bg-gray-100">
            <img className="rounded-t-lg" src={image} alt="" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-600">{desc}</p>
            </div>
            </a>

     );
}

export default HtgtCard;
