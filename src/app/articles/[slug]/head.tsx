import { ArticleMeta, getArticleMetaBySlug } from "../../../lib/getArticles";
import Meta from "../../../components/Meta";

export default async function ArticlePostHead({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const article: ArticleMeta = await getArticleMetaBySlug(params.slug);

  return (
    <Meta
      title={`${article.Title} • Kunal Singh`}
      description={article.Description}
      url={`https://articles.kunalsin9h.dev/articles/${params.slug}`}
    />
  );
}
