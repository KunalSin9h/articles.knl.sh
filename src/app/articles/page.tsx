import { getAllArticles } from "../../lib/getArticles";
import { cantoBold } from "../../lib/fontsCanto";
import type { Article } from "../../lib/getArticles";
import ArticleCart from "../../components/ArticleCard";

export default function ArticlePage() {
  const articles = getAllArticles();
  if (articles.length === 0) return null;
  return (
    <>
      <p className={`${cantoBold.className} m-2 p-2 text-4xl md:text-5xl`}>
        All Articles
      </p>
      <div className="mx-8 md:mx-10" >
        {articles.map((art: Article, i: number) => {
          return (
            <ArticleCart
              key={i}
              title={art.title}
              slug={art.slug}
              date={art.date}
              desc={art.description}
              authors={art.authors}
            />
          );
        })}
      </div>
    </>
  );
}
