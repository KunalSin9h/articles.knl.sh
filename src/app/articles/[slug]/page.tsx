import ArticleCard from "../../../components/ArticleCard";
import {
  getArticleBySlug,
  Article,
  getArticleMetaBySlug,
} from "../../../lib/getArticles";
import Link from "next/link";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Down from "../../../components/Down";

import { Metadata } from "next";
import Meta from "../../../components/Meta";

export async function generateMetadata({ params }): Promise<Metadata> {
  try {
    let articleMeta = await getArticleMetaBySlug(params.slug);
    return Meta({
      title: `${articleMeta.Title} • Kunal Singh`,
      description: articleMeta.Description,
      url: `https://articles.kunalsin9h.dev/articles/${articleMeta.Slug}`,
    });
  } catch (error) {
    return {
      title: "Error",
    };
  }
}

export default async function ArticlePage({ params }) {
  let article: Article;
  try {
    article = await getArticleBySlug(params.slug);
  } catch (error) {
    return <Down />;
  }

  const cont = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(article.Md);

  const content = cont.toString();

  return (
    <>
      <div className="my-4 p-4 md:my-8 md:py-2">
        <ArticleCard
          title={article.Title}
          desc={article.Description}
          date={article.Date}
          slug={article.Slug}
          views={article.Views}
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
