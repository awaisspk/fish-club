import {globalCss} from '@stitches';

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Poiret One',
      fontDisplay: 'swap',
      src: 'url("/fonts/PoiretOne-Regular.woff2") format("woff2")',
    },
    {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '100 900',
      fontDisplay: 'optional',
      src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
    },
  ],
  html: {
    font: '100%/1.25 $fonts$primary',
    boxSizing: 'border-box',
  },

  '*, ::before, ::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
    WebkitTapHighlightColor: 'transparent',
  },

  a: {
    textDecoration: 'none',
  },

  img: {
    maxWidth: '100%',
  },

  body: {
    lineHeight: 1.5,
  },

  'h1, h2, h3, h4,li,p': {
    overflowWrap: 'break-word',
    hyphens: 'auto',
    WebkitHyphens: 'auto',
  },
});
