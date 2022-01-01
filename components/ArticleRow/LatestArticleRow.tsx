import { format, parse } from 'date-fns';
import { keyframes, styled } from '../../stitches.config';
import {
  TypoHeadingH5,
  TypoLabel,
  TypoLabelLargeBaseStyleObj
} from '../Common/Typography';
import { Divider } from '../Common/Divider';

interface ILatestArticleRowProps {
  category: string;
  createdAt: string;
  title: string;
  isNew?: boolean;
}

export default function LatestArticleRow({
  category,
  createdAt,
  title,
  isNew
}: ILatestArticleRowProps) {
  return (
    <LatestArticleRowContainer>
      <DescriptionArea>
        <TypoLabel type="large" css={{ color: '$dark3' }}>
          {category}
        </TypoLabel>
        <Divider />
        <TypoLabel type="large" css={{ color: '$dark3' }}>
          {createdAt}
        </TypoLabel>
      </DescriptionArea>
      <TypoHeadingH5>
        {title}
        {isNew ? <NewBadge /> : null}
      </TypoHeadingH5>
    </LatestArticleRowContainer>
  );
}

const NewBadgeKeyframe = keyframes({
  '0%': {
    background: '$blue3'
  },
  '50%': {
    background: '$primaryDefault'
  },
  '100%': {
    background: '$blue3'
  }
});

const NewBadge = styled(
  'sup',
  {
    display: 'inline-block',
    verticalAlign: 'super',
    width: 6,
    height: 6,
    background: '$primaryDefault',
    borderRadius: '100%',
    marginLeft: 4,
    animation: `${NewBadgeKeyframe} 2s infinite`
  },
  TypoLabelLargeBaseStyleObj
);

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

const DescriptionArea = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  spaceX: 8
});
