import {Box} from '@components/box';
import Image from 'next/image';
import {Flex} from '@components/flex';
import {Answer, Paragraph, Question} from '@components/typography';

const questions = [
  {
    question: 'What is a hot wallet?',
    answer:
      `A hot wallet refers to a virtual currency wallet that is accessible online, and it facilitates cryptocurrency transactions between the owner and end-users. A collection of private keys stored on a program connected to the internet is used to store and send different currencies such as Etherium, Bitcoin, etc.

There are two wallets you will need. One to purchase the cryptocurrency ETH (we recommend Coinbase) and the other to purchase the NFT (we recommend Metamask). `,
  },
  {
    question:
      "Why do I need a hot wallet? Can't I just transfer money from my account from a crypto-exchange?",
    answer:
      ' Hot wallets is how you would store NFTs. When you buy ETH from an exchange, the ETH is often stored in an account balance for you. These account balances might not be set up to receive NFTs if you use it to send funds. ',
  },
];

export const Breakdown2 = () => {
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
          When the drop happens (aka when the membership is available for
          purchase), you will need to have enough ETH in your own hot wallet to
          check out.
        </Paragraph>
        {questions.map(({question, answer}, i) => (
          <Flex key={i} direction="col" gap="5">
            <Question>{question}</Question>
            <Answer>{answer}</Answer>
          </Flex>
        ))}

        <Paragraph
          css={{
            my: '30px',
            fontSize: '$4',
            fontWeigth: '300',
            color: '$gray10',
            '@bp3': {fontSize: '$6'},
            lh: '$2',
          }}
        >
          After the process is successful, the Flyfish Membership NFT will be
          automatically transferred into your hot wallet.
        </Paragraph>
        <Box>
          <Question>What do I need to be prepared?</Question>
          <Answer>We have a checklist for you!</Answer>
        </Box>
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
        <Image layout="fill" src="/images/breakdown2.svg" alt="" />
      </Box>
    </Box>
  );
};
