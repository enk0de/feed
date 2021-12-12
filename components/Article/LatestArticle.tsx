import { format } from 'date-fns';
import { styled } from '../../stitches.config';
import { TypoHeadingH5, TypoLabel } from '../Common/Typography';

interface ILatestArticleProps {
  category: string;
  createdAt: string;
  title: string;
}

export default function LatestArticle({
  category,
  createdAt,
  title
}: ILatestArticleProps) {
  return (
    <a style={{ cursor: 'pointer' }}>
      <LatestArticleContainer>
        <DescriptionArea>
          <TypoLabel type="large" css={{ color: '$dark3' }}>
            {category}
          </TypoLabel>
          <Divider />
          <TypoLabel type="large" css={{ color: '$dark3' }}>
            {format(new Date(createdAt), 'yyyy년 M월 d일')}
          </TypoLabel>
        </DescriptionArea>
        <TypoHeadingH5>{title}</TypoHeadingH5>
      </LatestArticleContainer>
    </a>
  );
}

const LatestArticleContainer = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '15px 0',
  '&:hover h5': {
    textDecoration: 'underline'
  }
});

const Divider = styled('div', {
  width: '1px',
  height: '8px',
  background: '$light0'
});

const DescriptionArea = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  spaceX: 8
});
