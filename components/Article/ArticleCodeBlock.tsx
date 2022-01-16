import { ReactNode, useEffect } from 'react';
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps
} from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { replaceLast } from '../../utils/stringUtils';

export default function ArticleCodeBlock({
  className,
  children,
  ...props
}: SyntaxHighlighterProps) {
  const match = /language-(\w+)/.exec(className || '');

  // 마지막 \n 삭제
  children = replaceLast(children, '\n', '');

  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" style={dracula} {...props}>
      {children}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}
