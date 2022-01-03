export default interface IArticle {
  title: string;
  date: string;
  category: string;
  description?: string;
}

export interface IArticleWithSlug extends IArticle {
  slug: string;
}
