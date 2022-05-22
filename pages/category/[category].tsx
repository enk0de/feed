import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { IChipSetProps } from '../../components/Chip/interface';
import { TypoHeadingH1, TypoHeadingH2 } from '../../components/Common/Typography';
import MainLayout from '../../components/Layout/MainLayout';
import categoryMap from '../../constants/categoryMap';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../../constants/paddings';
import CategorySlider from '../../containers/CategorySlider';
import LatestArticleRowList from '../../containers/LatestArticleRowList';
import { useInfiniteArticles } from '../../hooks/useInfiniteArticles';
import { IArticleWithSlug } from '../../interfaces/articles';
import { getArticles, getCategories } from '../../lib/api';
import { styled } from '../../stitches.config';

interface IIndexProps {
  articles: IArticleWithSlug[];
  category: keyof typeof categoryMap;
  categories: string[];
}

const PAGE_SIZE = 10;

const Index = ({ category, categories }: IIndexProps) => {
  const router = useRouter();

  const {
    data: { pages } = {},
    fetchNextPage,
    hasNextPage
  } = useInfiniteArticles({
    pageSize: PAGE_SIZE,
    category
  });

  const handleChipClick: IChipSetProps<string>['onChange'] = ({ value }) => {
    if (value == null) {
      router.push(router.basePath);
    } else {
      router.push(`${router.basePath}/category/${value}`);
    }
  };

  return (
    <Container>
      <>
        <TypoHeadingH2 css={{ textAlign: 'center', padding: '20px 0' }}>
          {categoryMap[category]}
        </TypoHeadingH2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <CategorySlider
            categories={categories}
            onChange={handleChipClick}
            withoutAll
          />
        </div>
        <LatestArticleRowList
          articles={
            pages?.map((i) => i.page).reduce((acc = [], cur) => [...acc, ...cur], []) ??
            []
          }
        />
        {hasNextPage ? (
          <MoreButtonWrapper>
            <MoreButton onClick={() => fetchNextPage()}>글 더 불러오기</MoreButton>
          </MoreButtonWrapper>
        ) : null}
      </>
    </Container>
  );
};

Index.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();
  return {
    paths: categories.map((category) => ({
      params: { category }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params!.category as string;
  const queryClient = new QueryClient();

  const allArticles = getArticles(
    ['date', 'slug', 'title', 'category'],
    category
  ) as IArticleWithSlug[];

  const allPageLength = Math.ceil(allArticles.length / PAGE_SIZE);

  await queryClient.prefetchInfiniteQuery(
    [useInfiniteArticles.queryKey, category],
    ({ pageParam: pageNum = 0 }) => ({
      page: allArticles.slice(pageNum * PAGE_SIZE, pageNum * PAGE_SIZE + PAGE_SIZE),
      pageNum,
      isLast: pageNum + 1 === allPageLength
    }),
    {
      getNextPageParam: (last) => (last.isLast ? undefined : last.pageNum + 1),
      staleTime: 5 * 60 * 1000
    }
  );

  const categories = getCategories();
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydratedState)),
      category,
      categories
    }
  };
};

export default Index;

const Container = styled('section', {
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

const MoreButtonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '24px'
});

const MoreButton = styled('button', {
  background: '$light2',
  padding: '12px 20px',
  borderRadius: '100px',
  color: '$dark2',
  fontWeight: '500',
  transition: '0.2s ease-in-out',
  '&:hover': {
    background: '$light1'
  },
  '&:focus': {
    boxShadow: 'rgba(0,0,0,.1) 0 0 0 2px'
  }
});
