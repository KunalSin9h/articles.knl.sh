import Link from "next/link";
import { cantoLight } from "../../lib/fontsCanto";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex h-screen flex-col justify-between">
      {children}
      <div
        className={`${cantoLight.className} mt-16 border-t-2 border-t-blackText border-opacity-50 p-2 text-center  text-sm  dark:border-t-whiteText`}
      >
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://creativecommons.org/licenses/by-nc-sa/2.0/"
          target="_blank"
        >
          <span className="underline">CC BY-NC-SA 2.0</span>
        </Link>{" "}
        , Aniket Kumar Singh.
      </div>
    </div>
  );
}
