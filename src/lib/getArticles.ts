export type Article = {
  Title: string;
  Slug: string;
  Description?: string;
  Date: string;
  Md: string;
};

export type ArticleMeta = {
  Title: string;
  Slug: string;
  Description?: string;
  Date: string;
};

export async function getArticleBySlug(slug: string) {
  const res = await fetch(
    `https://articles-back.kunalsin9h.dev/get-article/?slug=${slug}`,
    { next: { revalidate: 300 } }
  );
  const data: Article = await res.json();
  return data;
}

export async function getArticleMetaBySlug(slug: string) {
  const res = await fetch(
    `https://articles-back.kunalsin9h.dev/get-article-meta/?slug=${slug}`,
    { next: { revalidate: 300 } }
  );
  const data: ArticleMeta = await res.json();
  return data;
}

export async function getAllArticlesMeta() {
  const res = await fetch(
    "https://articles-back.kunalsin9h.dev/get-articles-meta/",
    { next: { revalidate: 300 } }
  );

  let data: ArticleMeta[] = await res.json();
  return data.sort((a: Article, b: Article) => {
    const dateA: Date = new Date(a.Date);
    const dateB: Date = new Date(b.Date);
    if (dateA < dateB) return 1;
    else if (dateA > dateB) return -1;
    else return 0;
  });
}

export async function getAllArticles() {
  const res = await fetch(
    "https://articles-back.kunalsin9h.dev/get-articles/",
    { next: { revalidate: 300 } }
  );
  let data: Article[] = await res.json();
  return data.sort((a: Article, b: Article) => {
    const dateA: Date = new Date(a.Date);
    const dateB: Date = new Date(b.Date);
    if (dateA < dateB) return 1;
    else if (dateA > dateB) return -1;
    else return 0;
  });
}
