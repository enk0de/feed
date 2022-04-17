import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { IChipSetProps } from '../components/Chip/interface';
import { TypoLabel } from '../components/Common/Typography';
import MainLayout from '../components/Layout/MainLayout';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../constants/paddings';
import CategorySlider from '../containers/CategorySlider';
import LatestArticleRowList from '../containers/LatestArticleRowList';
import { IArticleWithSlug } from '../interfaces/articles';
import { getArticles, getCategories } from '../lib/api';
import { styled } from '../stitches.config';

interface IIndexProps {
  articles: IArticleWithSlug[];
  categories: string[];
}

const Index = ({ articles, categories }: IIndexProps) => {
  const router = useRouter();
  const filteredCategory = (router.query?.category as string) ?? null;
  const handleChipClick: IChipSetProps<string>['onChange'] = ({ value }) => {
    if (value == null) {
      router.push(router.basePath);
    } else {
      router.push(`${router.basePath}?category=${value}`);
    }
  };

  return (
    <>
      <LatestArticleRowListContainer>
        <HeaderArea css={{ marginBottom: 12 }}>
          <TypoLabel
            type="large"
            css={{
              color: '$dark2',
              display: 'none',
              '@bp2': {
                display: 'revert'
              }
            }}
          >
            최신 아티클
          </TypoLabel>
          <CategorySlider
            categories={categories}
            selected={filteredCategory}
            onChange={handleChipClick}
          />
        </HeaderArea>
        <LatestArticleRowList articles={articles} />
      </LatestArticleRowListContainer>
    </>
  );
};

Index.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getArticles(['date', 'slug', 'title', 'category']);

  const categories = getCategories();

  return {
    props: { articles, categories }
  };
};

export default Index;

const LatestArticleRowListContainer = styled('section', {
  spaceY: 12,
  padding: `12px ${FRAME_PADDING_MOBILE}px 36px`,
  margin: '0 auto',
  maxWidth: '1140px',
  '@bp2': {
    padding: `12px ${FRAME_PADDING_DEFAULT}px 36px`
  },
  boxSizing: 'border-box'
});

const HeaderArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
