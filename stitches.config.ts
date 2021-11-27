import { createStitches, PropertyValue } from '@stitches/react';
import { NONAME } from 'dns';
import COLORS from './constants/colors';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: COLORS,
    fonts: {
      pretendard: 'Pretendard, apple-system, sans-serif',
      msa: 'Montserrat Alternates, apple-system, sans-serif'
    },
    fontSizes: {
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3.5rem',
      '6xl': '4rem'
    },
    shadows: {
      lightEl1Inset: 'inset 0px 0.5px 4px 0px rgba(96,97,112,0.32)',
      lightEl0Base: '0px 0px 0px 0px rgba(0,0,0,0)',
      lightEl1:
        '0px 0.5px 2px 0px rgba(96,97,112,0.16), 0px 0px 1px 0px rgba(40,41,61,0.08)',
      lightEl2:
        '0px 2px 4px 0px rgba(96,97,112,0.16), 0px 0px 1px 0px rgba(40,41,61,0.04)',
      lightEl3:
        '0px 4px 8px 0px rgba(96,97,112,0.16), 0px 0px 2px 0px rgba(40,41,61,0.04)',
      lightEl4:
        '0px 8px 16px 0px rgba(96,97,112,0.16), 0px 2px 4px 0px rgba(40,41,61,0.04)',
      lightEl5:
        '0px 16px 24px 0px rgba(96,97,112,0.16), 0px 2px 8px 0px rgba(40,41,61,0.04)',
      lightEl6:
        '0px 20px 32px 0px rgba(96,97,112,0.24), 0px 2px 8px 0px rgba(40,41,61,0.08)',
      darkEl1Inset: 'inset 0px 0.5px 4px 0px rgba(0,0,0,0.32)',
      darkEl0Base: '0px 0px 0px 0px rgba(0,0,0,0)',
      darkEl1: '0px 1px 2px 0px rgba(0,0,0,0.32), 0px 0px 1px 0px rgba(40,41,61,0.08)',
      darkEl2: '0px 2px 4px 0px rgba(0,0,0,0.32), 0px 0px 1px 0px rgba(0,0,0,0.04)',
      darkEl3: '0px 4px 8px 0px rgba(0,0,0,0.32), 0px 0px 2px 0px rgba(0,0,0,0.04)',
      darkEl4: '0px 8px 16px 0px rgba(0,0,0,0.32), 0px 2px 4px 0px rgba(0,0,0,0.04)',
      darkEl5: '0px 16px 24px 0px rgba(0,0,0,0.32), 0px 2px 8px 0px rgba(0,0,0,0.04)',
      darkEl6: '0px 20px 32px 0px rgba(0,0,0,0.32), 0px 2px 8px 0px rgba(0,0,0,0.08)'
    }
  },
  utils: {
    // Abbreviated margin properties
    m: (value: PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value
    }),
    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    spaceX: (value: PropertyValue<'margin'>) => ({
      '> * + *': {
        marginLeft: value
      }
    }),
    spaceY: (value: PropertyValue<'margin'>) => ({
      '> * + *': {
        marginTop: value
      }
    })
  }
});

export const globalStyles = globalCss({
  'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video':
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline'
    },
  'html,body,*': {
    fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-tap-highlight-color': 'transparent'
  },
  'article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section': {
    display: 'block'
  },
  button: {
    padding: 0,
    margin: 0,
    border: 'none',
    background: 'none',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:focus, &:active': {
      outline: 'none'
    }
  },
  body: {
    lineHeight: 1
  },
  'ol,ul': {
    listStyle: 'none'
  },
  'blockquote,q': {
    quotes: 'none'
  },
  'blockquote:before,blockquote:after,q:before,q:after': {
    content: ''
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'inherit'
    }
  }
});
