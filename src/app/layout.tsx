import "../styles/globals.css";
import { cantoRoman } from "../lib/fontsCanto";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html>
      <head />
      <body
        className={`${cantoRoman.className} bg-whiteBg text-xl text-blackText dark:bg-blackBg dark:text-whiteText md:text-2xl`}
      >
        {children}
      </body>
    </html>
  );
}
