import { ArticlesResponse } from './../../interfaces/articles';
import { NextApiRequest, NextApiResponse } from 'next';
import { IArticleWithSlug } from '../../interfaces/articles';
import { getArticles } from '../../lib/api';

const allArticles = getArticles([
  'date',
  'slug',
  'title',
  'category'
]) as IArticleWithSlug[];

//page: number, pageSize: number
export default function articles(
  req: NextApiRequest,
  res: NextApiResponse<ArticlesResponse>
) {
  if (req.method !== 'GET') {
    return res.status(400).end();
  }

  const { query } = req;

  const pageNum = Number(query.pageNum);
  const pageSize = Number(query.pageSize);

  const allPageLength = Math.ceil(allArticles.length / pageSize);

  res.status(200).json({
    page: allArticles.slice(pageNum * pageSize, pageNum * pageSize + pageSize),
    pageNum,
    isLast: pageNum + 1 === allPageLength
  });
}
