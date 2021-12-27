import { useEffect, useRef } from 'react';

export default function ArticleComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const copiedRef = ref.current;

    const utterances = document.createElement('script');
    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'hoondeveloper/feed',
      'issue-term': 'pathname',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true'
    };

    Object.entries(utterancesConfig).map(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    copiedRef?.appendChild(utterances);

    return () => {
      if (copiedRef?.hasChildNodes()) {
        copiedRef.childNodes.forEach((child) => copiedRef.removeChild(child));
      }
    };
  }, []);

  return <div className="article-comments" ref={ref} />;
}
