import {Box} from '@components/box';
import Image from 'next/image';
import {Flex} from '@components/flex';
import {Answer, H2, Paragraph, Question} from '@components/typography';

const questions = [
  {
    question: 'What is ETH and how do I get it?',
    answer: 'ETH is the cryptocurrency of Ethereum.',
  },
  {
    question:
      "Why can't I purchase it with US dollars via my credit/debit card?",
    answer:
      "You will need a private hot wallet to receive your membership token. We'll explain more below.",
  },
  {
    question: 'What is an NFT?',
    answer:
      'A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be used to represent easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to establish a verified and public proof of ownership',
  },
];

export const Breakdown1 = () => {
  return (
    <Box
      as="section"
      id="breakdown"
      css={{
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        '@bp3': {gridTemplateColumns: '1fr 2fr'},
      }}
    >
      <Box
        css={{
          mx: 'auto',
          position: 'relative',
          width: 'min(200px, 100% - 40px)',
          height: '200px',
          d: 'block',
          '@bp3': {
            left: '-30%',
            width: 'min(950px, 100% - 40px)',
            height: '950px',
            scale: 1.5,
          },
        }}
      >
        <Image layout="fill" src="/images/breakdown1.svg" alt="" />
      </Box>
      <Flex gap="10" direction="col" css={{mx: '$10', mt: '$9'}}>
        <H2>Breakdown</H2>
        <Paragraph css={{fontSize: '$4', '@bp3': {fontSize: '28px'}}}>
          The membership to Flyfish Club is purchased with a cryptocurrency
          called Ether (ETH).
        </Paragraph>
        {questions.map(({question, answer}, i) => (
          <Flex key={i} direction="col" gap="5">
            {i == 2 && para}
            <Question>{question}</Question>
            <Answer>{answer}</Answer>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

const para = (
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
    The membership for Flyfish Club is in the form of a Non-Fungible Token
    (NFT). It will be available on our website in January 2022.
  </Paragraph>
);
