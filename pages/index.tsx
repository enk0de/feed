import { ReactElement } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import LatestArticles from '../containers/LatestArticles';
import SpecialArticles from '../containers/SpecialArticles';

const Index = () => {
  return (
    <>
      <SpecialArticles />
      <LatestArticles />
    </>
  );
};

Index.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;
