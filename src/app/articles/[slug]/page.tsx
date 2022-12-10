import {
  getAllSlug,
  getArticleBySlug,
  getContent,
} from "../../../lib/getArticles";
import type { Article } from "../../../lib/getArticles";
import ArticleCard from "../../../components/ArticleCard";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  const allSlugs = getAllSlug();
  return allSlugs.map((slug) => ({
    slug,
  }));
}

export default async function Article({ params }) {
  const article: Article = getArticleBySlug(params.slug);
  const content = await getContent(article.content);
  return (
    <>
      <div className=" my-4 p-4 md:my-8 md:py-2 ">
      <ArticleCard title={article.title} desc={article.description} date={article.date} slug={article.slug} authors={article.authors} />
        <Link href="/articles"><button className="my-2 hover:underline underline-offset-8">&larr; All Articles</button></Link>
      </div>
      <article className={`prose m-4 dark:prose-invert`}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  );
}
