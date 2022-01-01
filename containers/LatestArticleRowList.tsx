import { differenceInCalendarDays, format, parse } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LatestArticleRow from '../components/ArticleRow/LatestArticleRow';
import { IChipSetProps } from '../components/Chip/interface';
import { TypoLabel } from '../components/Common/Typography';
import { ARTICLE_NEW_DATE } from '../constants/date';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../constants/paddings';
import { styled } from '../stitches.config';
import ArticleType from '../types/articles';
import CategorySlider from './CategorySlider';

interface ILatestArticleRowListProps {
  articles: ArticleType[];
  categories: string[];
}

export default function LatestArticleRowList({
  articles,
  categories
}: ILatestArticleRowListProps) {
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
    <LatestArticleRowListContainer>
      <HeaderArea>
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
      <div>
        {articles.map(({ slug, date, title, category }) => {
          const parsedDate = parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
          const formattedDate = format(parsedDate, 'yyyy년 M월 d일');
          const isNew =
            differenceInCalendarDays(new Date(), parsedDate) <= ARTICLE_NEW_DATE;

          return (
            <Link href={`/articles/${category}/${slug}`} key={slug} passHref>
              <a>
                <LatestArticleRow
                  title={title}
                  category={category}
                  createdAt={formattedDate}
                  isNew={isNew}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </LatestArticleRowListContainer>
  );
}

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
