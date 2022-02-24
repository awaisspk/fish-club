import {styled} from '@stitches';

export const Link = styled('a', {
  color: '$gray10',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$1',
  '@bp2': {
    fontSize: '$2',
  },
  fontFamily: '$secondary',
  '&:hover': {
    textDecoration: 'underline',
  },
});
