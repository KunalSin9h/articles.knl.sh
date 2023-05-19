export type Article = {
  Title: string;
  Slug: string;
  Description?: string;
  Date: string;
  Views: number;
  Md: string;
};

export type ArticleMeta = {
  Title: string;
  Slug: string;
  Description?: string;
  Date: string;
  Views: number;
};

export async function getArticleBySlug(slug: string) {
  const res = await fetchWithTimeout(
    `https://articles-back.kunalsin9h.dev/get-article/?slug=${slug}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const data: Article = await res.json();
  return data;
}

export async function getArticleMetaBySlug(slug: string) {
  const res = await fetchWithTimeout(
    `https://articles-back.kunalsin9h.dev/get-article-meta/?slug=${slug}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const data: ArticleMeta = await res.json();
  return data;
}

export async function getAllArticlesMeta() {
  const res = await fetchWithTimeout(
    "https://articles-back.kunalsin9h.dev/get-articles-meta/",
    {
      next: {
        revalidate: 0,
      },
    }
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
  const res = await fetchWithTimeout(
    "https://articles-back.kunalsin9h.dev/get-articles/",
    {
      next: {
        revalidate: 0,
      },
    }
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

async function fetchWithTimeout(
  resource: string,
  options: {
    timeout?: number;
    next: {
      revalidate: number;
    };
  }
) {
  const { timeout = 5000 } = options;

  const controller = new AbortController();
  const timeoutFunc = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(timeoutFunc);
  return response;
}
