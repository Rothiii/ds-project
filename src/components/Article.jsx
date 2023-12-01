// import { useState, useEffect } from "react";

import { useState } from "react";

// const encodedParams = new URLSearchParams();
// encodedParams.set('location_id', '8797440');
// encodedParams.set('language', 'en_US');
// encodedParams.set('currency', 'USD');

// const options = {
//     method: 'POST',
//     url: 'https://tourist-attraction.p.rapidapi.com/detail',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'X-RapidAPI-Key': '3a42756931msh77342621204fbdcp16628ejsn62ec8a5275b9',
//       'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com'
//     },
//     data: encodedParams,
//   };

const Article = () => {
    // const [article, setArticle] = useState([]).
    // useEffect(() => {
    //     try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // })

    return ( 
        <div class="container my-24 mx-auto md:px-6">

        <section class="mb-32">
            <h1 class="mb-4 text-3xl font-bold">
            An intriguing title for an interesting article
            </h1>

            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500"> </p>

            <p class="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            sapiente molestias consectetur. Fuga nulla officia error placeat
            veniam, officiis rerum laboriosam ullam molestiae magni velit laborum
            itaque minima doloribus eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Optio sapiente molestias consectetur.
            Fuga nulla officia error placeat veniam, officiis rerum laboriosam
            ullam molestiae magni velit laborum itaque minima doloribus eligendi!
            </p>

            <p class="mb-6">
            <strong>Optio sapiente molestias consectetur?</strong>
            </p>

            <p class="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            architecto ex ab aut tempora officia libero praesentium, sint id
            magnam eius natus unde blanditiis. Autem adipisci totam sit
            consequuntur eligendi.
            </p>

            <p class="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
            inventore perspiciatis possimus quia incidunt maiores molestias eaque
            nam commodi! Magnam, labore.
            </p>

            <img src="https://mdbcdn.b-cdn.net/img/new/slides/194.jpg"
            class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />

            <ul class="mb-6 list-inside list-disc">
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Amet</li>
            </ul>

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            temporibus nulla voluptatibus accusantium sapiente doloremque.
            Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
            nostrum in accusantium dolore veritatis eius est?
            </p>
        </section>
        </div>
    );
}
 
export default Article;