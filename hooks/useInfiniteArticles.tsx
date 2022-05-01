import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { ArticlesResponse } from '../interfaces/articles';

export const useInfiniteArticles = ({ pageSize }: { pageSize: number }) => {
  return useInfiniteQuery<ArticlesResponse>(
    useInfiniteArticles.queryKey,
    ({ pageParam }) => fetcher(pageParam ?? 0, pageSize),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (last) => (last.isLast ? undefined : last.pageNum + 1),
      staleTime: 5 * 60 * 1000
    }
  );
};

async function fetcher(pageNum: number, pageSize: number) {
  return (await axios.get(`/api/articles?pageNum=${pageNum}&pageSize=${pageSize}`))
    .data;
}

useInfiniteArticles.fetcher = fetcher;
useInfiniteArticles.queryKey = 'articles';
