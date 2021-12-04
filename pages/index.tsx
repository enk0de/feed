import MainLayout from '../components/Layout/MainLayout';
import LatestArticles from '../containers/LatestArticles';
import SpecialArticles from '../containers/SpecialArticles';

const Index = () => {
  return (
    <MainLayout>
      <SpecialArticles />
      <LatestArticles />
    </MainLayout>
  );
};

export default Index;
