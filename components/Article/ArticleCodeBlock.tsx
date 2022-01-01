import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps
} from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { TypoBody14BaseStyleObj } from '../Common/Typography';

export default function ArticleCodeBlock({
  className,
  ...props
}: SyntaxHighlighterProps) {
  const match = /language-(\w+)/.exec(className || '');

  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" style={dracula} {...props} />
  ) : (
    <code className={className} {...props} />
  );
}
