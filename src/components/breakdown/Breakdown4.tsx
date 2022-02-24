import {Box} from '@components/box';
import Image from 'next/image';
import {Flex} from '@components/flex';
import {Answer, Paragraph, Question} from '@components/typography';

const questions = [
  {
    question: 'What does it mean by the secondary market?',
    answer: `Once a person purchases the original token from Flyfish Club, all future transactions happen on a secondary market, such as Opensea.io.

OpenSea is the first and largest peer-to-peer marketplace for cryptogoods (like an eBay for crypto assets), which include collectibles, gaming items, and other virtual goods backed by a blockchain. On OpenSea, anyone can buy or sell these items through a smart contract.`,
  },
];

export const Breakdown4 = () => {
  return (
    <Box
      as="section"
      id="breakdown"
      css={{
        display: 'grid',
        justifyItems: 'center',
        overflow: 'hidden',
        alignItems: 'center',
        gridTemplateRow: '1fr 3fr',
        '@bp3': {
          pl: '50px',
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRow: '1fr',
        },
      }}
    >
      <Flex
        gap="10"
        direction="col"
        css={{mx: '$10', mt: '$9', lh: '$0', '@bpmax3': {gridRow: 2}}}
      >
        <Paragraph css={{fontSize: '$4', '@bp3': {fontSize: '28px'}}}>
          As a NFT, the memberships are tradable on the secondary market.
        </Paragraph>
        {questions.map(({question, answer}, i) => (
          <Flex key={i} direction="col" gap="5">
            <Question>{question}</Question>
            <Answer>{answer}</Answer>
          </Flex>
        ))}
      </Flex>

      <Box
        css={{
          position: 'relative',
          width: 'min(200px, 100% - 40px)',
          height: '200px',
          gridRow: 1,
          d: 'block',
          '@bp3': {
            right: '-20%',
            gridColumn: 2,
            width: 'min(950px, 100% - 40px)',
            height: '950px',
            scale: 1.1,
          },
        }}
      >
        <Image layout="fill" src="/images/breakdown4.svg" alt="" />
      </Box>
    </Box>
  );
};
