import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentProps } from 'react';
import LatestArticleRow from '../components/ArticleRow/LatestArticleRow';
import Chip from '../components/Chip/Chip';
import { IChipSetProps } from '../components/Chip/interface';
import { TypoLabel } from '../components/Common/Typography';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../constants/paddings';
import { styled } from '../stitches.config';
import ArticleType from '../types/articles';

interface ILatestArticleRowListProps {
  articles: ArticleType[];
}

export default function LatestArticleRowList({ articles }: ILatestArticleRowListProps) {
  const router = useRouter();
  const category = (router.query?.category as string) ?? null;
  const handleChipClick: IChipSetProps<string>['onChange'] = ({ value }) => {
    if (value == null) {
      router.push(router.basePath);
    } else {
      router.push(`${router.basePath}?category=${value}`);
    }
  };

  return (
    <LatestArticleRowListContainer>
      <HeaderArea>
        <TypoLabel type="large" css={{ color: '$dark2' }}>
          최신 아티클
        </TypoLabel>
        <Chip.Set value={category} onChange={handleChipClick}>
          <Chip value={null}>전체</Chip>
          <Chip disabled>하이</Chip>
          <Chip value="story">하이</Chip>
          <Chip value="77">하이</Chip>
        </Chip.Set>
      </HeaderArea>
      <div>
        {articles.map(({ slug, date, title, category }) => (
          <Link href={`/articles/${category}/${slug}`} key={slug} passHref>
            <a>
              <LatestArticleRow title={title} category={category} createdAt={date} />
            </a>
          </Link>
        ))}
      </div>
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

const HeaderArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
