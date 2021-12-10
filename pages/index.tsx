import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import LatestArticles from '../containers/LatestArticles';
import SpecialArticles from '../containers/SpecialArticles';
import { getAllPosts } from '../lib/api';
import PostType from '../types/post';

interface IIndexProps {
  posts: PostType[];
}

const Index = ({ posts }: IIndexProps) => {
  return (
    <>
      <SpecialArticles />
      <LatestArticles posts={posts} />
    </>
  );
};

Index.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'slug', 'title', 'category']);

  return {
    props: { posts }
  };
};

export default Index;
