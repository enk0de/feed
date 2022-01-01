import SpecialArticleRow from '../components/ArticleRow/SpecialArticleRow';
import { styled } from '../stitches.config';

export default function SpecialArticleRowList() {
  return (
    <SpecialArticleRowListContainer>
      <SpecialArticleRow>
        <SpecialArticleRow.Image src="/assets/lol.jpeg" alt="롤" />
        <SpecialArticleRow.Title>{`롤 중독자\n임지훈`}</SpecialArticleRow.Title>
      </SpecialArticleRow>
      <SpecialArticleRow>
        <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
        <SpecialArticleRow.Title>{`토스\n토스토스`}</SpecialArticleRow.Title>
      </SpecialArticleRow>
      <SpecialArticleRow>
        <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
        <SpecialArticleRow.Title>{`토스\n토스토스`}</SpecialArticleRow.Title>
      </SpecialArticleRow>
      <SpecialArticleRow>
        <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
        <SpecialArticleRow.Title>{`토스\n토스토스`}</SpecialArticleRow.Title>
      </SpecialArticleRow>
    </SpecialArticleRowListContainer>
  );
}

const SpecialArticleRowListContainer = styled('section', {
  position: 'relative'
});
