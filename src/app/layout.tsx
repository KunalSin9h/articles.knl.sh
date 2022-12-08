import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className="text-4xl">
      <head />
      <body className="flex h-screen items-center justify-center bg-[#EEEED0]">
        {children}
      </body>
    </html>
  );
}
