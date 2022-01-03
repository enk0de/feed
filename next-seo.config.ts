import { NextSeoProps } from 'next-seo';

const SEO: NextSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://feed.hoondev.com/',
    description: '소프트웨어 엔지니어링에 관한 다양한 이야기를 전합니다.'
  },
  titleTemplate: '%s | 훈데브 피드',
  defaultTitle: '훈데브 피드',
  description: '소프트웨어 엔지니어링에 관한 다양한 이야기를 전합니다.'
};

export default SEO;
