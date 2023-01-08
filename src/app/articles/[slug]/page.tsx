"use client"
import { Article, getAllArticles, getArticleBySlug } from "../../../lib/getArticles";
import ArticleCard from "../../../components/ArticleCard";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html"
import { use } from "react";

export  function generateStaticParams() {
  const allSlugs: Article[] = use(getAllArticles());
  return allSlugs.map((art: Article) => ({
    slug : art.Slug
  }));
}

export default function ArticlePage({ params }) {
  const article: Article = use(getArticleBySlug(params.slug));
  const content = use(remark().use(html).process(article.Md));
  const contentToString = content.toString();
  return (
    <>
      <div className=" my-4 p-4 md:my-8 md:py-2 ">
      <ArticleCard title={article.Title} desc={article.Description} date={article.Date} slug={article.Slug} />
        <Link href="/articles"><button className="my-2 hover:underline underline-offset-8">&larr; All Articles</button></Link>
      </div>
      <article className={`prose m-4 dark:prose-invert`}>
        <div dangerouslySetInnerHTML={{ __html: contentToString }} />
      </article>
    </>
  );
}
