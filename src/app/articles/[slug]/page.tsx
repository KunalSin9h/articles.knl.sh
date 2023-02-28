"use client";

import Spinner from "../../../components/Spinner";
import ArticleCard from "../../../components/ArticleCard";
import { getArticleBySlug, Article } from "../../../lib/getArticles";

import Link from "next/link";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { useState, useEffect } from "react";

export default function ArticlePage({ params }) {
  const [article, setArticle]: [Article, any] = useState(null);
  const [content, setContent]: [string, any] = useState("");

  useEffect(() => {
    (async function () {
      const art = await getArticleBySlug(params.slug);
      setArticle(art);

      const cont = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypeStringify)
        .process(art.Md);

      const contString = cont.toString();
      setContent(contString);
    })();
  }, [params.slug]);

  if (article == null) {
    return <Spinner />;
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
