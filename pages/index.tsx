import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import LatestArticleRowList from '../containers/LatestArticleRowList';
import { IArticleWithSlug } from '../interfaces/articles';
import { getArticles, getCategories } from '../lib/api';

interface IIndexProps {
  articles: IArticleWithSlug[];
  categories: string[];
}

const Index = ({ articles, categories }: IIndexProps) => {
  return (
    <>
      <LatestArticleRowList articles={articles} categories={categories} />
    </>
  );
};

Index.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const filteredCategory: string | undefined = (query?.category as string) || undefined;
  const articles = getArticles(['date', 'slug', 'title', 'category'], filteredCategory);

  const categories = getCategories();

  return {
    props: { articles, categories }
  };
};

export default Index;
