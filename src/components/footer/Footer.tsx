import {Box} from '@components/box';
import {Text} from '@components/typography';

export const Footer = () => {
  return (
    <div>
      <Box
        css={{
          minH: 200,
          bc: '$indigo12',
          width: '$full',
          textAlign: 'center',
          '@bpmax3': {mt: '50px'},
        }}
      >
        <Text
          css={{
            fontSize: '3rem',
            fontFamily: '$primary',
            color: '$gray1',
          }}
        >
          Yoo, I am a footer
        </Text>
      </Box>
    </div>
  );
};
