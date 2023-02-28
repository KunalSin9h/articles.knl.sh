"use client";

import { Article, getArticleBySlug } from "../../../lib/getArticles";
import { useState, useEffect } from "react";

export default function ArticlePostHead({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    (async () => {
      const article: Article = await getArticleBySlug(params.slug);
      setArticle(article);
    })();
  }, [params.slug]);

  if (article == null) {
    return null;
  }

  return (
    <>
      <title>{`${article.Title} - Kunal Singh`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={article.Description} />
      <meta name="keywords" content="Kunal Singh Personal Articles Website" />
      <link rel="icon" href="/images/favicon.ico" />
      <meta property="og:title" content={`${article.Title} - Kunal Singh`} />
      <meta
        property="og:url"
        content={`https://articles.kunalsin9h.dev/articles/${params.slug}`}
      />
      <meta property="og:site_name" content="articles.kunalsin9h.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={article.Description} />
    </>
  );
}
