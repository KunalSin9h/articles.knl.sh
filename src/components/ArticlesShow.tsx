"use client";

import { getAllArticles } from "../lib/getArticles";
import { cantoSemiBold } from "../lib/fontsCanto";
import ArticleCart from "./ArticleCard";
import type { Article } from "../lib/getArticles";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ArticleShow(params: { isPrev: boolean }) {
  const [articles, setArticles]: [Article[], any] = useState(null);

  useEffect(() => {
    async function fetchAllArticles() {
      const allArticles = await getAllArticles();
      setArticles(allArticles);
    }
    fetchAllArticles();
  }, []);

  if (articles == null) {
    return <h1>Fetching Articles...</h1>;
  } else if (articles.length == 0) {
    return <h1>No Articles</h1>;
  }

  return (
    <>
      <p className={`${cantoSemiBold.className} m-2 p-2 text-3xl`}>Articles</p>
      <div className="mx-8 md:mx-10">
        {articles.map((art: Article, i: number) => {
          if (i >= 5 && params.isPrev) return null;
          return (
            <ArticleCart
              key={i}
              title={art.Title}
              slug={art.Slug}
              date={art.Date}
              desc={art.Description}
            />
          );
        })}
        <div className="m-4 text-right">
          {articles.length > 5 && params.isPrev ? (
            <Link href="/articles">
              <button className="underline-offset-8 hover:underline">
                See all articles &rarr;
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
