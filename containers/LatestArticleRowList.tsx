import { differenceInCalendarDays, format, parse } from 'date-fns';
import Link from 'next/link';
import LatestArticleRow from '../components/ArticleRow/LatestArticleRow';
import { ARTICLE_NEW_DATE } from '../constants/date';
import { IArticleWithSlug } from '../interfaces/articles';

interface ILatestArticleRowListProps {
  articles: IArticleWithSlug[];
}

export default function LatestArticleRowList({ articles }: ILatestArticleRowListProps) {
  return (
    <div>
      {articles.map(({ slug, date, title, category }) => {
        const parsedDate = parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
        const formattedDate = format(parsedDate, 'yyyy년 M월 d일');
        const isNew =
          differenceInCalendarDays(new Date(), parsedDate) <= ARTICLE_NEW_DATE;

        return (
          <Link href={`/articles/${category}/${slug}`} key={slug} passHref>
            <a title={title}>
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
  );
}
