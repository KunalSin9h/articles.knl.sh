import Image from "next/image";

import { cantoBold } from "../lib/fontsCanto";
import Socials from "../components/Socials";
import ArticleShow from "../components/ArticlesShow";

import { Metadata } from "next";
import Meta from "../components/Meta";

export const metadata: Metadata = Meta({});

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/dp.png"
          alt="Picture of the Kunal(Kunal Singh)"
          width={200}
          height={200}
          className="mb-4 mt-8 h-36 w-36 select-none md:h-48 md:w-48 "
        />
        <p className={`${cantoBold.className} text-5xl md:text-6xl`}>
          Kunal Singh
        </p>
        <p className="m-2 rounded-sm p-2 leading-5 md:leading-6">
          These are my articles.
        </p>
        <ul className="m-2 flex select-none gap-4 ">
          <Socials name="github" link="https://github.com/kunalsin9h" />
          <Socials
            name="twitter"
            link="https://twitter.com/intent/user?screen_name=kunalsin9h"
          />
          <Socials name="mail" link="mailto:kunal@kunalsin9h.com" />
          <Socials
            name="linkedin"
            link="https://www.linkedin.com/in/kunalsin9h/"
          />
        </ul>
      </div>
      <section>
        {/* https://github.com/vercel/next.js/issues/42292 */}
        {/* @ts-expect-error Server Component */}
        <ArticleShow isPrev={true} />
      </section>
    </>
  );
}
