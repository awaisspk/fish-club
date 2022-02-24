import {createStitches} from '@stitches/react';
import type * as Stitches from '@stitches/react';
import {
  whiteA,
  blackA,
  indigo,
  teal,
  tealA,
  sky,
  green,
  greenA,
  indigoA,
  skyA,
} from '@radix-ui/colors';

const StitchesConfig = createStitches({
  theme: {
    colors: {
      ...whiteA,
      ...blackA,
      ...indigo,
      ...indigoA,
      ...teal,
      ...tealA,
      ...green,
      ...greenA,
      ...sky,
      ...skyA,
      gray1: '#f8fafc',
      gray2: '#f1f5f9',
      gray3: '#e2e8f0',
      gray4: '#cbd5e1',
      gray5: '#94a3b8',
      gray6: '#64748b',
      gray7: '#475569',
      gray8: '#334155',
      gray9: '#1e293b',
      gray10: '#0f172a',
    },

    fonts: {
      primary: 'Poiret One',
      secondary: 'Inter, Roboto',
    },

    fontSizes: {
      0: '0.75rem',
      1: '0.875rem',
      2: '1rem',
      3: '1.125rem',
      4: '1.25rem',
      5: '1.5rem',
      6: '1.875rem',
      7: '2.25rem',
      8: '3rem',
      9: '3.75rem',
      10: '4.5rem',
      11: '6rem',
      12: '8rem',
    },
    fontWeights: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    radii: {
      none: '0',
      sm: '.125rem',
      md: '.25rem',
      lg: '.5rem',
      full: '9999px',
    },
    space: {
      px: '1px',
      0: '0',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.375rem',
      4: '0.5rem',
      5: '0.625rem',
      6: '0.75rem',
      7: '0.875rem',
      8: '1rem',
      9: '1.25rem',
      10: '1.5rem',
      11: '1.75rem',
      12: '2rem',
      13: '2.25rem',
      14: '2.5rem',
      15: '2.75rem',
      16: '3rem',
      17: '3.5rem',
      18: '4rem',
      19: '5rem',
      20: '6rem',
      21: '7rem',
      22: '8rem',
      23: '9rem',
      24: '10rem',
      25: '11rem',
      26: '12rem',
      27: '13rem',
      28: '14rem',
      29: '15rem',
      30: '16rem',
      31: '18rem',
      32: '20rem',
      33: '24rem',
    },
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      0: 1.25,
      1: 1.375,
      3: 1.5,
      4: 1.625,
      5: '2',
      6: '.75rem',
      7: '1rem',
      8: '1.25rem',
      9: '1.5rem',
      10: '1.75rem',
      11: '2rem',
      12: '2.25rem',
      13: '2.5rem',
    },
    sizes: {
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      screenW: '100vw',
      screenH: '100vh',
      0: '14rem',
      1: '16rem',
      2: '20rem',
      3: '24rem',
      4: '28rem',
      5: '32rem',
      6: '36rem',
      7: '42rem',
      8: '48rem',
      9: '56rem',
      10: '64rem',
      11: '72rem',
      12: '80rem',
      13: '90rem',
    },
    shadows: {
      shadow1: 'hsl(224, 87.1%, 92.0%) 0px 10px 50px',
      shadow2: '#AFDFD7 0px 7px 20px',
    },
    borderStyles: {},
    borderWidths: {},
    transitions: {},
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
    hover: '(any-hover : hover)',
    bp1: '(min-width: 30em)', // 480px
    bp2: '(min-width: 40em)', // 640px
    bp3: '(min-width: 48em)', // 768px
    bp4: '(min-width: 62em)', // 992px
    bp5: '(min-width: 80em)', // 1280px
    bp6: '(min-width: 90em)', // 1440px

    bpmax1: '(max-width: 30em)',
    bpmax2: '(max-width: 40em)',
    bpmax3: '(max-width: 48em)',
    bpmax4: '(max-width: 62em)',
    bpmax5: '(max-width: 80em)',
    bpmax6: '(max-width: 90em)',
  },
  utils: {
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    bg: (value: Stitches.PropertyValue<'background'>) => ({
      background: value,
    }),
    bf: (value: Stitches.PropertyValue<'backdropFilter'>) => ({
      backdropFilter: value,
    }),
    bgBlur: (value: Stitches.PropertyValue<'backdropFilter'>) => ({
      bf: 'saturate(180%) blur(10px)',
      bg: `${value}66`,
    }),
    bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    minW: (value: Stitches.PropertyValue<'minWidth'>) => ({
      minWidth: value,
    }),
    maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
      maxWidth: value,
    }),
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    minSize: (value: Stitches.PropertyValue<'width'>) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value,
    }),
    maxSize: (value: Stitches.PropertyValue<'width'>) => ({
      maxWidth: value,
      maxHeight: value,
    }),

    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    minH: (value: Stitches.PropertyValue<'minHeight'>) => ({
      minHeight: value,
    }),
    maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
      maxHeight: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({boxShadow: value}),
    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),
    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({textAlign: value}),
    tt: (value: Stitches.PropertyValue<'textTransform'>) => ({
      textTransform: value,
    }),
    d: (value: Stitches.PropertyValue<'display'>) => ({
      display: value,
    }),

    to: (value: Stitches.PropertyValue<'textOverflow'>) => ({
      textOverflow: value,
    }),
    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({flexWrap: value}),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({alignSelf: value}),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({flexGrow: value}),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({flexBasis: value}),
    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({overflowX: value}),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({overflowY: value}),
    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    select: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      appearance: value,
      WebkitAppearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
    scale: (value: number | string) => ({
      transform: `scale(${value})`,
    }),
    linearGradiant: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    textGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }),
  },
});

export const {css, styled, globalCss, keyframes, getCssText, config} =
  StitchesConfig;
