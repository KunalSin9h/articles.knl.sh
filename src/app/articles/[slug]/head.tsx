import { getArticleBySlug } from "../../../lib/getArticles";
import type { Article } from "../../../lib/getArticles";
import { use } from "react";

export default function ArticlePostHead({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const art: Article = use(getArticleBySlug(params.slug));
  return (
    <>
      <title>{`${art.Title} - Kunal Singh`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={art.Description} />
      <meta name="keywords" content="Kunal Singh Personal Articles Website" />
      <link rel="icon" href="/images/favicon.ico" />
      <meta property="og:title" content={`${art.Title} - Kunal Singh`} />
      <meta
        property="og:url"
        content={`https://articles.kunalsin9h.dev/articles/${params.slug}`}
      />
      <meta property="og:site_name" content="articles.kunalsin9h.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={art.Description} />
    </>
  );
}
