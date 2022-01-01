import { styled } from '../../stitches.config';
import {
  TypoBody16BaseStyleObj,
  TypoHeadingH3BaseStyleObj,
  TypoHeadingH4BaseStyleObj,
  TypoHeadingH5BaseStyleObj,
  TypoHeadingH6BaseStyleObj
} from './Typography';

const ArticleStyleWrapper = styled('div', {
  // block element style
  'address,article,aside,blockquote,canvas,dd,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h1,h3,h4,h5,h6,header,hr,li,main,nav,noscript,ol,p,pre,section,table,tfoot,ul,video':
    {
      marginBottom: 16,
      color: '$dark1',
      ...TypoBody16BaseStyleObj
    },
  h1: TypoHeadingH3BaseStyleObj,
  h2: TypoHeadingH4BaseStyleObj,
  h3: TypoHeadingH5BaseStyleObj,
  h4: TypoHeadingH6BaseStyleObj,
  'h1,h2,h3,h4,h5,h6': {
    marginBottom: 16,
    marginTop: 24
  },
  'ol,ul': {
    paddingLeft: '1.4em',
    marginBottom: 16,
    listStyle: 'revert'
  },
  li: {
    margin: '4px 0'
  },
  // children ol, ul
  'li>ol,li>ul': {
    paddingLeft: 16,
    marginBottom: 4
  },
  a: {
    color: '$blue1',
    textDecoration: 'none'
  },
  'a:hover,a:active': {
    textDecoration: 'underline'
  },
  blockquote: {
    borderLeft: '4px solid',
    borderLeftColor: '$dark3',
    '> p': { color: '$dark3' },
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    paddingLeft: 16
  },
  'code,kbd,pre,samp': {
    fontFamily: 'monospace,monospace',
    fontSize: '1em',
    overflow: 'scroll'
  },
  'tt,code': {
    fontFamily:
      'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
    fontSize: '13px'
  },
  pre: {
    marginTop: 0,
    marginBottom: 0,
    fontFamily:
      'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
    fontSize: '13px',
    wordWrap: 'normal'
  },
  'p,blockquote,ul,ol,dl,table,pre,details': {
    marginTop: 0,
    marginBottom: '16px'
  },
  img: {
    width: '100%'
  },
  hr: {
    height: 1,
    border: 'none',
    backgroundColor: '$light1'
  },
  ':not(pre) > :not(div) > code': {
    backgroundColor: '$light1',
    color: '$dark1',
    borderRadius: 4,
    padding: '2px 4px',
    marginRight: '2px'
  }
});

export default ArticleStyleWrapper;
