export default interface IArticle {
  title: string;
  date: string;
  category: string;
  description?: string;
}

export interface IArticleWithSlug extends IArticle {
  slug: string;
}

export interface ArticlesResponse {
  page: IArticleWithSlug[];
  pageNum: number;
  isLast: boolean;
}
