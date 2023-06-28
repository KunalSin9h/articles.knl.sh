import { cantoBold, cantoLight } from "../lib/fontsCanto";
import Link from "next/link";
import millify from "millify";

export default function ArticleCard({
  title,
  date,
  slug,
  desc,
  views,
}: {
  title: string;
  date: string;
  slug: string;
  desc?: string;
  views: number;
}) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const postDate = new Date(date);
  const year = postDate.getFullYear();
  const month = months[postDate.getMonth()];
  const dat = postDate.getDate();

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
        <p className="font-bold">{`${month} ${dat}, ${year}`}</p>
        <p>•</p>
        <p className="font-bold">{millify(views)} views</p>
      </div>
    </div>
  );
}
