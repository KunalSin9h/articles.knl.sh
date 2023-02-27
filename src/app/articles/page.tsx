import ArticleShow from "../../components/ArticlesShow";
import Link from "next/link";

export default function ArticlePage() {
  return (
    <div className="mt-5">
      <div className="ml-8 md:ml-10">
        <Link href="/">
          <button className="mb-2 underline-offset-8 hover:underline">
            &larr; Back to home
          </button>
        </Link>
      </div>
      <ArticleShow isPrev={false} />
    </div>
  );
}
