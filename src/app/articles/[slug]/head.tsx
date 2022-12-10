import { getArticleBySlug } from "../../../lib/getArticles";
import type { Article } from "../../../lib/getArticles";

export default function ArticlePostHead({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const art: Article = getArticleBySlug(params.slug);
  return (
    <>
      <title>{`${art.title} - Aniket Singh`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={art.description} />
      <meta
        name="keywords"
        content="Aniket Singh Personal Portfolio Website Writings Articles Blogs"
      />
      <link rel="icon" href="/images/favicon.ico" />
      <meta property="og:title" content={`${art.title} - Aniket Singh`} />
      <meta
        property="og:url"
        content={`https://aniketsingh.co.in/articles/${params.slug}`}
      />
      <meta property="og:site_name" content="aniketsingh.co.in" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={art.description} />
    </>
  );
}
