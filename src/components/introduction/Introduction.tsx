import {Flex} from '@components/flex';
import {H2, ListItem, Paragraph} from '@components/typography';
import {styled} from '@stitches';
import Image from 'next/image';

const ImageContainer = styled('div', {
  width: '100%',
  height: '250px',
  position: 'relative',
  overflow: 'hidden',
  '@bp1': {
    height: '320px',
  },
  '@bp2': {
    height: '420px',
  },
  '@bp3': {
    height: '520px',
  },
  '@bp4': {
    height: '420px',
    btlr: '80px',
    bblr: '80px',
  },
});

export const Introduction = () => {
  return (
    <Flex
      as="section"
      gap="9"
      center
      direction={{'@initial': 'col', '@bp4': 'row'}}
    >
      <ImageContainer css={{'@bp4': {order: 2}, flexGrow: 2.5}}>
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/pour_wide.webp"
          alt="pour wide"
        />
      </ImageContainer>
      <Flex
        gap="5"
        direction="col"
        css={{mx: '$10', mt: '$9', flexShrink: 1.8}}
      >
        <H2>Introduction</H2>
        <Paragraph>
          As the first of its kind, FFC is focused around utility. Our members
          can use and enjoy our club, converting a typical membership into an
          asset.
        </Paragraph>
        <Flex
          as="ul"
          direction="col"
          gap="3"
          css={{listStylePosition: 'inside'}}
        >
          <ListItem>
            There are no applications or reoccurring fees each year
          </ListItem>
          <ListItem>Members can lease or resell their membership</ListItem>
          <ListItem>Payment for food and beverage will be in USD</ListItem>
        </Flex>
      </Flex>
    </Flex>
  );
};
