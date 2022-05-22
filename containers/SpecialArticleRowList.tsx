import SpecialArticleRow from '../components/ArticleRow/SpecialArticleRow';
import HorizontalScrollShadower from '../components/Common/HorizontalScrollShadower';

const SpecialArticleRowList = () => {
  return (
    <HorizontalScrollShadower
      as="section"
      scrollAreaStyle={{
        display: 'flex',
        spaceX: 12
      }}
    >
      <SpecialArticleRow>
        <SpecialArticleRow.Image src="/assets/lol.jpeg" alt="롤" />
        <SpecialArticleRow.Title>{`테스트`}</SpecialArticleRow.Title>
      </SpecialArticleRow>
      <SpecialArticleRow>
        <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
        <SpecialArticleRow.Title>{`테스트`}</SpecialArticleRow.Title>
      </SpecialArticleRow>
      <SpecialArticleRow>
        <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
        <SpecialArticleRow.Title>{`테스트`}</SpecialArticleRow.Title>
      </SpecialArticleRow>
      <SpecialArticleRow>
        <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
        <SpecialArticleRow.Title>{`테스트`}</SpecialArticleRow.Title>
      </SpecialArticleRow>
      <SpecialArticleRow>
        <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
        <SpecialArticleRow.Title>{`테스트`}</SpecialArticleRow.Title>
      </SpecialArticleRow>
    </HorizontalScrollShadower>
  );
};

export default SpecialArticleRowList;
