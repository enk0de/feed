import { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import SpecialArticleImage from './SpecialArticleImage';
import SpecialArticleTitle from './SpecialArticleTitle';

interface ISpecialArticleProps {
  background?: ReactNode;
  children?: ReactNode;
}

export default function SpecialArticle({ background, children }: ISpecialArticleProps) {
  return (
    <a style={{ cursor: 'pointer' }}>
      <SpecialArticleContainer>{children}</SpecialArticleContainer>
    </a>
  );
}

const SpecialArticleContainer = styled('article', {
  width: 250,
  height: 150,
  borderRadius: 15,
  position: 'relative',
  transitionProperty: 'transform,box-shadow',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '200ms',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '$lightEl6'
  }
});

SpecialArticle.Title = SpecialArticleTitle;
SpecialArticle.Image = SpecialArticleImage;
