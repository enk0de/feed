import { styled } from '../../stitches.config';
import {
  TypoHeadingH1,
  TypoLabel,
  TypoLabelLargeBaseStyleObj
} from '../Common/Typography';
import { Divider } from '../Common/Divider';
import { getMappedCategory } from '../../utils/getMappedCategory';
import Link from 'next/link';

interface IArticleHeaderProps {
  title: string;
  category: string;
  date: string;
}

export default function ArticleHeader({ title, category, date }: IArticleHeaderProps) {
  return (
    <ArticleHeaderContainer>
      <TypoHeadingH1
        css={{
          textAlign: 'center',
          fontSize: 28,
          lineHeight: '38px',
          marginBottom: '10px',
          '@bp2': {
            fontSize: 40,
            lineHeight: '54px'
          }
        }}
      >
        {title}
      </TypoHeadingH1>
      <DescriptionArea>
        <Link href={`/category/${category}`}>
          <a>
            <TypoLabel
              type="large"
              css={{
                color: '$dark3',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              {getMappedCategory(category)}
            </TypoLabel>
          </a>
        </Link>
        <Divider />
        <TypoLabel type="large" css={{ color: '$dark3' }}>
          {date}
        </TypoLabel>
      </DescriptionArea>
    </ArticleHeaderContainer>
  );
}

const ArticleHeaderContainer = styled('div', {
  marginBottom: '40px',
  '@bp2': {
    marginTop: 20
  }
});

const DescriptionArea = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '> * + *': {
    marginLeft: 10
  }
});
