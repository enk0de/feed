import LatestArticle from '../components/Article/LatestArticle';
import { TypoLabel } from '../components/Common/Typography';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../constants/paddings';
import { styled } from '../stitches.config';

export default function LatestArticles() {
  return (
    <LatestArticlesContainer>
      <TypoLabel type="large" css={{ color: '$dark2' }}>
        최신 아티클
      </TypoLabel>
      <LatestArticle
        title="포트폴리오 사이트를 리뉴얼합니다!"
        category="잡다한 이야기"
        createdAt="2021. 12. 04"
      />
    </LatestArticlesContainer>
  );
}

const LatestArticlesContainer = styled('section', {
  spaceY: 12,
  padding: `12px 0 ${FRAME_PADDING_MOBILE}px ${FRAME_PADDING_MOBILE}px`,
  '@bp2': {
    padding: `12px 0 ${FRAME_PADDING_DEFAULT}px ${FRAME_PADDING_DEFAULT}px`
  }
});
