import {styled} from '@stitches';

export const Button = styled('button', {
  all: 'unset',
  fontFamily: '$secondary',
  color: '$green10',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1.5px solid $greenA8',
  br: '$full',
  py: '$4',
  px: '$11',
  '&:hover': {
    bg: '$greenA2',
  },
  '&:active': {
    bg: '$greenA3',
  },
  '&:focus': {
    boxShadow: '$shadow2',
  },

  '@bpmax3': {
    py: '$3',
    px: '$4',
  },
});
