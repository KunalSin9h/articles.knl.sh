import { getAllArticlesMeta, ArticleMeta } from "../lib/getArticles";
import { cantoSemiBold } from "../lib/fontsCanto";
import ArticleCart from "./ArticleCard";
import type { Article } from "../lib/getArticles";
import Link from "next/link";
import Down from "./Down";

export default async function ArticleShow(params: { isPrev: boolean }) {
  let articles: ArticleMeta[];

  try {
    articles = await getAllArticlesMeta();
  } catch (error) {
    return <Down />;
  }

  if (articles.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center ">
        <p className="text-2xl md:text-4xl">No Articles</p>
      </div>
    );
  }

  return (
    <>
      <p className={`${cantoSemiBold.className} m-2 p-2 text-3xl`}>Articles</p>
      <div className="mx-8 md:mx-10">
        {articles.map((art: Article, i: number) => {
          if (i >= 5 && params.isPrev) return null;
          return (
            <ArticleCart
              key={i}
              title={art.Title}
              slug={art.Slug}
              date={art.Date}
              desc={art.Description}
            />
          );
        })}
        <div className="m-4 text-right">
          {articles.length > 5 && params.isPrev ? (
            <Link href="/articles">
              <button className="underline-offset-8 hover:underline">
                See all articles &rarr;
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
