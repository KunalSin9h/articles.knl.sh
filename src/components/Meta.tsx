export default function Meta(params: {
  title?: string;
  description?: string;
  url?: string;
}) {
  const title = params.title || "Articles • Kunal Singh";
  const desc = params.description || "Kunal Singh's Personal Article Website";
  const url = params.url || "https://articles.kunalsin9h.dev";

  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Kunal Singh" />
      <meta name="description" content={desc} />
      <meta
        name="keywords"
        content="Kunal Singh Personal Portfolio Website Writings Articles Blogs"
      ></meta>
      <link rel="icon" href="/images/favicon.ico" />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="articles.kunalsin9h.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={desc} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@KunalSin9h" />
      <meta name="twitter:creator" content="@KunalSin9h" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />

      <meta name="theme-color" content="#171717" />
    </>
  );
}
