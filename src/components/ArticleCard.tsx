import { cantoBold, cantoLight } from "../lib/fontsCanto";
import Link from "next/link";

export default function ArticleCard({
  title,
  date,
  slug,
  desc,
  authors,
}: {
  title: string;
  date: string;
  slug: string;
  desc?: string;
  authors: string[];
}) {
  return (
    <div className="mt-10 flex flex-col items-start border-b-2 border-b-blackText  first:mt-0 dark:border-b-whiteText">
      <Link href={`/articles/${slug}`}>
        <p className={`${cantoBold.className} text-2xl md:text-3xl `}>
          {title}
        </p>
      </Link>
      {desc ? (
        <p className={`${cantoLight.className} my-1 leading-5 md:leading-6`}>
          {desc}
        </p>
      ) : null}
      <div className="flex justify-start gap-2 text-sm">
        <p className="font-bold">{`${date},`}</p>
        {authors.map((a) => {
          return <p key={a}>{a}</p>;
        })}
      </div>
    </div>
  );
}
