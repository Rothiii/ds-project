import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
const ArticlePage = ({ articles }) => {
    // console.log(articles);
    const { articleUrl } = useParams();
    const decodedUrl = useMemo(() => atob(articleUrl), [articleUrl]);
    console.log({decodedUrl, articleUrl, articles});

    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const foundArticle = articles.find(a => a?.data?.url === decodedUrl);
            console.log({foundArticle})
            setArticle(foundArticle?.data)
        }
        fetchArticle();
    }, [decodedUrl, article]);

    // console.log({article});
    if (article == null) {
        return <div>Loading article...</div>
    }


    return (
        // if Article.length > 0 
        <>
            {
                article && (
                    <div>
                        <div className="container flex">
                            <NavBar />
                        </div>

                        <div className="container my-24 mx-auto md:px-6">
                            <section className="mb-32">
                                <img src={article.image}
                                    className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt={article.title} />

                                <h1 className="mb-4 text-3xl font-bold">
                                    {article.title}
                                </h1>

                                <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500 text-justify"> </p>

                                <p className="mb-6">
                                    {article.content}
                                </p>
                            </section>
                        </div>
                    </div>
                )}
        </>
    );
}

export default ArticlePage;