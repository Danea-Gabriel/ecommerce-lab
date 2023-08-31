import Article from "../components/Article";
import { useSelector } from "react-redux";
import { getArticleStatus } from "../redux/articlesSlice";
import { selectAllArticles } from "../redux/articlesSlice";

const BlogPage = () => {
  const articles = useSelector(selectAllArticles);
  const loadingStatus = useSelector(getArticleStatus);
  if (loadingStatus === "loading") {
    return <p>Loading </p>;
  }
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Find the latest trends and gossips about the fashion industry.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogPage;
