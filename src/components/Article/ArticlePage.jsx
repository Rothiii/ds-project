import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ArticlePage = () => {
    const {articleUrl} = useParams();
    const decodeUrl = decodeURIComponent(articleUrl);
    const [article, setArticle] = useState([])

    useEffect(() => {
        // const articleUrls = ["https://blog.tiket.com/en/balikpapan-tourist-attractions/", ]


        const fetchArticles = async () => {
            const tempRespon = [];

            for (const url of decodeUrl) {
                try {
                    const response = await fetch(`https://article-extractor2.p.rapidapi.com/article/parse?url=${url}`);
                    if (response.ok) {
                        const data = await response.json();
                        tempRespon.push(data);
                    } else {
                        console.error(`Failed to fetch article from ${url}`);
                    }
                } catch (error) {
                    console.error(`Error fetching article from ${url}`, error);
                }
            }

            setArticle(tempRespon);
        };

        fetchArticles();
    //     try {
            //tempRespon = []
            //looping json(?)
    //         const response = await axios.request(
        //     {
        //          method: 'GET',
//                  url: 'https://article-extractor2.p.rapidapi.com/article/parse',
//                  params: {
//                      url: articleLink[i],
//             },
//                  headers: {
//                  'X-RapidAPI-Key': '3a42756931msh77342621204fbdcp16628ejsn62ec8a5275b9',
//                  'X-RapidAPI-Host': 'article-extractor2.p.rapidapi.com'
//              },
//            };
    //       );
    //         tempRespon.push(response)
    //
    //      setArticle(tempRespon)
    //         console.log(article.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    }, [articleUrl]);

    if (!article) {
        return <div>Loading...</div>
    }

    return (
        // if Article.length > 0 
        <div class="container my-24 mx-auto md:px-6">
                <section class="mb-32">
                    <img src={article.image}
                    class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt={article.title} />

                    <h1 class="mb-4 text-3xl font-bold">
                    {article.title}
                    </h1>

                    <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500"> </p>

                    <p class="mb-6">
                    {article.content}
                    </p>
                </section>
        </div>
    );
}
 
export default ArticlePage;