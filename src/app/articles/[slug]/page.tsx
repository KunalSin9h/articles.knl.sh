import {
  getAllSlug,
  getArticleBySlug,
  getContent,
} from "../../../lib/getArticles";
import type { Article } from "../../../lib/getArticles";

export async function generateStaticParams() {
  const allSlugs = getAllSlug();
  return allSlugs.map((slug) => ({
    slug,
  }));
}

export default async function Article({ params }) {
  const article: Article = getArticleBySlug(params.slug);
  const content = await getContent(article.content);
  return (
    <article className="prose md:prose-xl">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
