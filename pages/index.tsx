import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import LatestArticles from '../containers/LatestArticles';
import SpecialArticles from '../containers/SpecialArticles';
import { getAllArticles } from '../lib/api';
import ArticleType from '../types/articles';

interface IIndexProps {
  articles: ArticleType[];
}

const Index = ({ articles }: IIndexProps) => {
  return (
    <>
      <SpecialArticles />
      <LatestArticles articles={articles} />
    </>
  );
};

Index.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles(['date', 'slug', 'title', 'category']);

  return {
    props: { articles }
  };
};

export default Index;
