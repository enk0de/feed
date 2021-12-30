import { format, parse } from 'date-fns';
import { styled } from '../../stitches.config';
import { TypoHeadingH5, TypoLabel } from '../Common/Typography';

interface ILatestArticleRowProps {
  category: string;
  createdAt: string;
  title: string;
}

export default function LatestArticleRow({
  category,
  createdAt,
  title
}: ILatestArticleRowProps) {
  return (
    <LatestArticleRowContainer>
      <DescriptionArea>
        <TypoLabel type="large" css={{ color: '$dark3' }}>
          {category}
        </TypoLabel>
        <Divider />
        <TypoLabel type="large" css={{ color: '$dark3' }}>
          {format(
            parse(createdAt, 'yyyy-MM-dd HH:mm:ss', new Date()),
            'yyyy년 M월 d일'
          )}
        </TypoLabel>
      </DescriptionArea>
      <TypoHeadingH5>{title}</TypoHeadingH5>
    </LatestArticleRowContainer>
  );
}

const LatestArticleRowContainer = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '15px 0',
  cursor: 'pointer',
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
