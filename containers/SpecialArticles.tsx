import SpecialArticle from '../components/Article/SpecialArticle';
import { styled } from '../stitches.config';

export default function SpecialArticles() {
  return (
    <SpecialArticlesContainer>
      <SpecialArticle>
        <SpecialArticle.Image src="/assets/lol.jpeg" alt="롤" />
        <SpecialArticle.Title>{`롤 중독자\n임지훈`}</SpecialArticle.Title>
      </SpecialArticle>
      <SpecialArticle>
        <SpecialArticle.Image src="/assets/toss.jpeg" alt="토스" />
        <SpecialArticle.Title>{`토스\n토스토스`}</SpecialArticle.Title>
      </SpecialArticle>
      <SpecialArticle empty />
      <SpecialArticle empty />
    </SpecialArticlesContainer>
  );
}

const SpecialArticlesContainer = styled('section', {
  display: 'flex',
  overflow: 'scroll',
  justifyContent: 'center',
  '@media (max-width: 1140px)': {
    justifyContent: 'flex-start'
  },
  spaceX: '20px',
  padding: '12px 40px 40px',
  width: '100%',
  boxSizing: 'border-box'
});
