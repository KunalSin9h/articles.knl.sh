import "../styles/globals.css";
import { cantoRoman } from "../lib/fontsCanto";
import DarkButton from "../components/DarkButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html>
      <head />
      <body
        className={`${cantoRoman.className} bg-whiteBg  text-xl text-blackText selection:bg-cream dark:bg-blackBg dark:text-whiteText dark:selection:bg-dullPurple md:text-2xl`}
      >
        <div className="mx-auto max-w-3xl">
          <div className="absolute right-0 top-0">
            <DarkButton />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
