import { ArticleMeta, getArticleMetaBySlug } from "../../../lib/getArticles";
import Meta from "../../../components/Meta";

export default async function ArticlePostHead({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let article: ArticleMeta;

  try {
    article = await getArticleMetaBySlug(params.slug);
  } catch (error) {
    return <Meta />;
  }

  return (
    <Meta
      title={`${article.Title} • Kunal Singh`}
      description={article.Description}
      url={`https://articles.kunalsin9h.dev/articles/${params.slug}`}
    />
  );
}
