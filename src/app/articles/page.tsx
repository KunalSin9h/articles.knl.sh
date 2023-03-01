import ArticleShow from "../../components/ArticlesShow";
import Link from "next/link";

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
