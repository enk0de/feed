import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { ArticlesResponse } from '../interfaces/articles';

export const useInfiniteArticles = ({
  pageSize,
  category
}: {
  pageSize: number;
  category?: string;
}) => {
  return useInfiniteQuery<ArticlesResponse>(
    category ? [useInfiniteArticles.queryKey, category] : useInfiniteArticles.queryKey,
    ({ pageParam }) => fetcher(pageParam ?? 0, pageSize, category),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (last) => (last.isLast ? undefined : last.pageNum + 1),
      staleTime: 5 * 60 * 1000
    }
  );
};

async function fetcher(pageNum: number, pageSize: number, category?: string) {
  return (
    await axios.get(
      `/api/articles?pageNum=${pageNum}&pageSize=${pageSize}${
        category ? `&category=${category}` : ''
      }`
    )
  ).data;
}

useInfiniteArticles.fetcher = fetcher;
useInfiniteArticles.queryKey = 'articles';
