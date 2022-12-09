import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export type Article = {
  title: string;
  date: string;
  description?: string;
  slug: string;
  authors: string[];
  content: string;
};

const postDir = path.join(process.cwd(), "posts");

export function getAllSlug(): (string | null)[] {
  const allFiles: (string | null)[] = fs.readdirSync(postDir);
  return allFiles.map((file) => {
    return file.replace(/\.md$/, "");
  });
}

export function getArticleBySlug(slug: string): Article {
  const file = fs.readFileSync(path.join(postDir, `${slug}.md`), "utf-8"),
    fileMatter = matter(file),
    title = fileMatter.data.title,
    date = fileMatter.data.date,
    description = fileMatter.data.description,
    authors = fileMatter.data.authors,
    content = fileMatter.content;
  return {
    title,
    date,
    description,
    slug,
    authors,
    content,
  };
}

export function getAllArticles(): Article[] {
  const slugs = getAllSlug();
  const articles = slugs.map((slug) => {
    return getArticleBySlug(slug);
  });
  return articles.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
}

export async function getContent(content: string): Promise<string> {
  const val = await remark().use(html).use(remarkGfm).process(content);
  return val.toString();
}
