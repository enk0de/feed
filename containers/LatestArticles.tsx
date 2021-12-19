import Link from 'next/link';
import LatestArticle from '../components/Article/LatestArticle';
import { TypoLabel } from '../components/Common/Typography';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../constants/paddings';
import { styled } from '../stitches.config';
import ArticleType from '../types/articles';

interface ILatestArticlesProps {
  articles: ArticleType[];
}

export default function LatestArticles({ articles }: ILatestArticlesProps) {
  return (
    <LatestArticlesContainer>
      <TypoLabel type="large" css={{ color: '$dark2' }}>
        최신 아티클
      </TypoLabel>
      {articles?.map(({ slug, date, title, category }) => (
        <Link href={`/articles/${slug}`} key={slug}>
          <a>
            <LatestArticle title={title} category={category} createdAt={date} />
          </a>
        </Link>
      ))}
    </LatestArticlesContainer>
  );
}

const LatestArticlesContainer = styled('section', {
  spaceY: 12,
  padding: `12px ${FRAME_PADDING_MOBILE}px`,
  margin: '0 auto',
  maxWidth: '1140px',
  '@bp2': {
    padding: `12px ${FRAME_PADDING_DEFAULT}px`
  },
  boxSizing: 'border-box'
});
