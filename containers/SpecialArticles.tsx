import SpecialArticle from '../components/Article/SpecialArticle';
import { styled } from '../stitches.config';

export default function SpecialArticles() {
  return (
    <SpecialArticlesContainer>
      <SpecialArticle>
        <SpecialArticle.Image src="/assets/lol.jpeg" alt="롤" />
        <SpecialArticle.Title>롤 중독자 임지훈</SpecialArticle.Title>
      </SpecialArticle>
      <SpecialArticle>
        <SpecialArticle.Image src="/assets/toss.jpeg" alt="토스" />
        <SpecialArticle.Title>토스 사랑해 사랑해</SpecialArticle.Title>
      </SpecialArticle>
    </SpecialArticlesContainer>
  );
}

const SpecialArticlesContainer = styled('section', {
  display: 'flex',
  spaceX: '20px',
  padding: '12px 40px',
  width: '100%'
});
