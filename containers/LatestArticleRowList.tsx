import Link from 'next/link';
import LatestArticleRow from '../components/ArticleRow/LatestArticleRow';
import { TypoLabel } from '../components/Common/Typography';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../constants/paddings';
import { styled } from '../stitches.config';
import ArticleType from '../types/articles';

interface ILatestArticleRowListProps {
  articles: ArticleType[];
}

export default function LatestArticleRowList({ articles }: ILatestArticleRowListProps) {
  return (
    <LatestArticleRowListContainer>
      <TypoLabel type="large" css={{ color: '$dark2' }}>
        최신 아티클
      </TypoLabel>
      {articles?.map(({ slug, date, title, category }) => (
        <Link href={`/articles/${slug}`} key={slug}>
          <a>
            <LatestArticleRow title={title} category={category} createdAt={date} />
          </a>
        </Link>
      ))}
    </LatestArticleRowListContainer>
  );
}

const LatestArticleRowListContainer = styled('section', {
  spaceY: 12,
  padding: `12px ${FRAME_PADDING_MOBILE}px`,
  margin: '0 auto',
  maxWidth: '1140px',
  '@bp2': {
    padding: `12px ${FRAME_PADDING_DEFAULT}px`
  },
  boxSizing: 'border-box'
});
