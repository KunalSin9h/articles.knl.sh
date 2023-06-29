"use client";

import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { useState, useEffect } from "react";

export default function Page() {
  let [quote, setQuote] = useState("");
  let [author, setAuthor] = useState("");

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        let quoteJson = await fetch("https://api.quotable.io/random", {
          cache: "no-store",
        });
        let quoteData = await quoteJson.json();
        setQuote(quoteData.content);
        setAuthor(quoteData.author);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFetch();
  }, []);

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
      <div className={`${quote === "" ? "hidden" : ""}`}>
        <div className="italic">
          <Balancer>{quote}</Balancer>
        </div>
        <div className="text-center"> - {author}</div>
      </div>
    </div>
  );
}
