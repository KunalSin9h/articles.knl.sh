import ArticleShow from "../../components/ArticlesShow";
import Link from "next/link";

import { Metadata } from "next";
import Meta from "../../components/Meta";

export const metadata: Metadata = Meta({
  title: "All Articles • Kunal Singh",
  description: "All Articles by Kunal Singh",
  url: "https://articles.kunalsin9h.dev/articlek",
});

export default function ArticlePage() {
  return (
    <div className="mt-4">
      <div className="ml-4 flex justify-start">
        <Link href="/">
          <button className="mb-2 underline-offset-8 hover:underline">
            &larr; Back to home
          </button>
        </Link>
      </div>
      {/* https://github.com/vercel/next.js/issues/42292 */}
      {/* @ts-expect-error Server Component */}
      <ArticleShow isPrev={false} />
    </div>
  );
}
