import {Flex} from '@components/flex';
import {styled} from '@stitches';

export const IconBtn = styled('button', Flex, {
  all: 'unset',
  '&:active svg': {
    stroke: '$gray7',
  },
});
