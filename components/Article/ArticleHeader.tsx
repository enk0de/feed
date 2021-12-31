import { styled } from '../../stitches.config';
import { TypoHeadingH1, TypoLabelLargeBaseStyleObj } from '../Common/Typography';
import { Divider } from '../Common/Divider';

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
        <DescriptionItem>{category}</DescriptionItem>
        <Divider />
        <DescriptionItem>{date}</DescriptionItem>
      </DescriptionArea>
    </ArticleHeaderContainer>
  );
}

const ArticleHeaderContainer = styled('div', {
  marginBottom: '40px'
});

const DescriptionArea = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '> * + *': {
    marginLeft: 10
  }
});

const DescriptionItem = styled('span', {
  color: '$dark3',
  ...TypoLabelLargeBaseStyleObj
});
