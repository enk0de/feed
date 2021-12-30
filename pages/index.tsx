import { GetServerSideProps, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import LatestArticleRowList from '../containers/LatestArticleRowList';
import { getArticles } from '../lib/api';
import ArticleType from '../types/articles';

interface IIndexProps {
  articles: ArticleType[];
}

const Index = ({ articles }: IIndexProps) => {
  return (
    <>
      <LatestArticleRowList articles={articles} />
    </>
  );
};

Index.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const category: string | undefined = (query?.category as string) || undefined;
  const articles = getArticles(['date', 'slug', 'title', 'category'], category);

  return {
    props: { articles }
  };
};

export default Index;
