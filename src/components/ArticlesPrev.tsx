"use client"

import { getAllArticles } from "../lib/getArticles";
import { cantoSemiBold } from "../lib/fontsCanto";
import ArticleCart from "./ArticleCard";
import type { Article } from "../lib/getArticles";
import Link from "next/link";
import { use } from "react";

export default function ArticlePrev(){
  const articles: Article[] = use(getAllArticles());
  if (articles.length === 0) return null;
  return (
    <>
      <p className={`${cantoSemiBold.className} m-2 p-2 text-3xl`}>Articles</p>
      <div className="mx-8 md:mx-10">
        {articles.map((art: Article, i: number) => {
          if (i >= 5) return null;
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
          {articles.length > 5 ? (
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
