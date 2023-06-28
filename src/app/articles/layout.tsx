import { cantoLight } from "../../lib/fontsCanto";
import Link from "next/link";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="items-start">{children}</div>
      <div
        className={`${cantoLight.className}  mt-16 border-t-2 border-t-blackText border-opacity-50 p-2 text-center  text-sm  dark:border-t-whiteText`}
      >
        &copy; {new Date().getFullYear()} <strong>Kunal Singh</strong>, Content
        Licensed Under{" "}
        <Link
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          target="_blank"
        >
          <u>CC BY-SA 4.0</u>
        </Link>
      </div>
    </div>
  );
}
