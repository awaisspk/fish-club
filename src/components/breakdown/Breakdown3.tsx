import {Box} from '@components/box';
import Image from 'next/image';
import {Flex} from '@components/flex';
import {Answer, Paragraph, Question} from '@components/typography';

const questions = [
  {
    question: 'When is the restaurant open?',
    answer: 'We are planning to open in Q1/Q2, 2023.',
  },
  {
    question: 'How long does the membership last?',
    answer: 'For the lifetime of the restaurant',
  },
];

export const Breakdown3 = () => {
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
        <Image layout="fill" src="/images/breakdown3.svg" alt="" />
      </Box>
      <Flex gap="10" direction="col" css={{mx: '$10', mt: '$9'}}>
        <Paragraph css={{fontSize: '$4', '@bp3': {fontSize: '28px'}}}>
          Once you own the Flyfish Membership NFT, you will be able to make
          reservations on our website. Non-token holders will not have the
          ability to make reservations.
        </Paragraph>
        {questions.map(({question, answer}, i) => (
          <Flex key={i} direction="col" gap="5">
            <Question>{question}</Question>
            <Answer>{answer}</Answer>
          </Flex>
        ))}

        <Paragraph
          css={{
            mt: '30px',
            fontSize: '$4',
            fontWeigth: '300',
            color: '$gray10',
            '@bp3': {fontSize: '$6'},
            lh: '$2',
          }}
        >
          There will be no transaction fees involved to make a reservation,
          however members will need to have access to the wallet where their
          membership NFT is kept in order to verify ownership.
        </Paragraph>
      </Flex>
    </Box>
  );
};
