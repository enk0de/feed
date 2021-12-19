import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import LatestArticleRowList from '../containers/LatestArticleRowList';
import SpecialArticleRowList from '../containers/SpecialArticleRowList';
import { getAllArticles } from '../lib/api';
import ArticleType from '../types/articles';

interface IIndexProps {
  articles: ArticleType[];
}

const Index = ({ articles }: IIndexProps) => {
  return (
    <>
      <SpecialArticleRowList />
      <LatestArticleRowList articles={articles} />
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
