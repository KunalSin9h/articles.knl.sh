export type Article = {
  Title: string;
  Slug: string;
  Description?: string;
  Date: string;
  Md: string;
};

export async function getArticleBySlug(slug: string) {
  const res = await fetch(
    `https://articles-back.kunalsin9h.dev/get-article/?slug=${slug}`,
    { next: { revalidate: 300 } }
  );
  const data: Article = await res.json();
  return data;
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
