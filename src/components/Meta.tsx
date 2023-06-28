export default function Meta(params: {
  title?: string;
  description?: string;
  url?: string;
}) {
  const title = params.title || "Articles • Kunal Singh";
  const description =
    params.description || "Kunal Singh's Personal Article Website";
  const url = params.url || "https://articles.kunalsin9h.dev";

  return {
    title,
    description,
    keywords: [
      "Kunal",
      "Singh",
      "Personal",
      "Portfolio",
      "Website",
      "Writings",
      "Articles",
      "Blogs",
    ],
    authors: [{ name: "Kunal Singh", url: "https://kunalsin9h.dev" }],
    openGraph: {
      title,
      description,
      url,
      siteName: "articles.kunalsin9h.dev",
      locale: "en_US",
      type: "website",
    },
    icons: {
      icon: "/images/favicon.ico",
      shortcut: "/images/favicon.ico",
    },
    themeColor: "#171717",
    twitter: {
      card: "summary",
      title,
      description,
      site: "articles.kunalsin9h.dev",
      creator: "@KunalSin9h",
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    category: "technology",
  };
}
