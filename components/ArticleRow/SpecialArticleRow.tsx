import { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import SpecialArticleRowImage from './SpecialArticleRowImage';
import SpecialArticleRowTitle from './SpecialArticleRowTitle';

interface ISpecialArticleRowProps {
  empty?: boolean;
  children?: ReactNode;
}

export default function SpecialArticleRow({
  empty,
  children
}: ISpecialArticleRowProps) {
  return (
    <a style={{ cursor: empty ? 'default' : 'pointer' }}>
      <SpecialArticleRowContainer>
        {empty ? <SpecialArticleRowEmpty /> : children}
      </SpecialArticleRowContainer>
    </a>
  );
}

const SpecialArticleRowEmpty = styled('article', {
  width: 250,
  height: 150,
  borderRadius: 15,
  background: '$light2'
});

const SpecialArticleRowContainer = styled('article', {
  width: 190,
  height: 120,
  borderRadius: 15,
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  zIndex: 1,
  '@bp1': {
    width: 250,
    height: 150
  },
  '&:hover': {
    '.special-article-row-img': {
      transform: 'scale(1.1)'
    }
  }
});

SpecialArticleRow.Title = SpecialArticleRowTitle;
SpecialArticleRow.Image = SpecialArticleRowImage;
