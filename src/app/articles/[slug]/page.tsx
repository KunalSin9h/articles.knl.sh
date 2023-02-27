"use client";

import { getArticleBySlug, Article } from "../../../lib/getArticles";
import ArticleCard from "../../../components/ArticleCard";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";
import { useState, useEffect } from "react";

export default function ArticlePage({ params }) {
  const [article, setArticle]: [Article, any] = useState(null);
  const [content, setContent]: [string, any] = useState("");

  useEffect(() => {
    async function fetchAndProcessArticles() {
      const art = await getArticleBySlug(params.slug);
      setArticle(art);
      const cont = await remark().use(html).process(art.Md);
      const contString = cont.toString();
      setContent(contString);
    }
    fetchAndProcessArticles();
  }, [params.slug]);

  if (article == null) {
    return <h1>Fetching Article...</h1>;
  }

  return (
    <>
      <div className=" my-4 p-4 md:my-8 md:py-2 ">
        <ArticleCard
          title={article.Title}
          desc={article.Description}
          date={article.Date}
          slug={article.Slug}
        />
        <Link href="/articles">
          <button className="my-2 underline-offset-8 hover:underline">
            &larr; All Articles
          </button>
        </Link>
      </div>
      <article className={`prose m-4 dark:prose-invert`}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  );
}
