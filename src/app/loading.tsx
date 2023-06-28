import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default async function Page() {
  let quote = "";
  let author = "";

  try {
    let quoteJson = await fetch("https://api.quotable.io/random", {
      cache: "no-store",
    });
    let quoteData = await quoteJson.json();
    quote = quoteData.content;
    author = quoteData.author;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 px-8">
      <div className="flex items-center gap-2">
        <Image
          src="/images/spinner.svg"
          alt="Loading spinner"
          width={30}
          height={30}
          className="dark:invert"
        />
        <p className="text-2xl font-bold">Loading</p>
      </div>
      <div>
        <div className="italic">
          <Balancer>{quote}</Balancer>
        </div>
        <div className="text-center"> - {author}</div>
      </div>
    </div>
  );
}
