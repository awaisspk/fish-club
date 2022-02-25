import {Box} from '@components/box';
import {Flex} from '@components/flex';
import {H2} from '@components/typography';
import {Accordian} from './Accordian';

const tokenAccordian = [
  {
    question: 'What is a Non-Fungible-Token (NFT)?',
    answer:
      'A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be used to represent easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to establish a verified and public proof of ownership.',
  },
  {
    question: 'How many types of tokens are there?',
    answer: ' There are two types of tokens; Flyfish and Flyfish Omakase.',
  },
  {
    question: 'Do all tokens come with same utility?',
    answer:
      ' Flyfish tokens give you access to the restaurant and cocktail lounge. Flyfish Omakase tokens give you access to the restaurant, cocktail lounge, and omakase room. ',
  },
  {
    question: 'Can A person purchase more than one token?',
    answer: 'There is no limit on the number of tokens one can purchase.',
  },
  {
    question: 'How many tokens can one mint at once?',
    answer:
      "A person can mint two tokens at once, with no limit on the amount of tokens one can purchase if they'd like to repeat the process over and over.",
  },
];
const membershipAccordian = [
  {
    question: 'Is there an age requirement to be a token holder?',
    answer: 'Yes, all token holders must be at least 21 years of age.',
  },
  {
    question: 'How long is my membership valid for?',
    answer:
      'Your membership will remain valid as long as you are a token holder.',
  },
  {
    question:
      'Can a family member use the token instead of the actual token holder?',
    answer:
      ' Unfortunately, not. The token is intended for the person that purchased it. A family member can enjoy the restaurant with the token holder, but not in place of the token holder. ',
  },
  {
    question:
      'If one does not intend to use the token, should they buy a token?',
    answer:
      ' Since we have created a leasing mechanism where a token holder can "lease" their token to a non-token holder on a monthly basis, there is a potential "passive income strategy" that could exist here, in addition to the potential appreciation of the token price due to the scarcity and demand of the token. That being said, we encourage all token holders to enjoy the restaurant, as this is how the tokens were conceptualized, as our project is focused on utility. ',
  },
  {
    question:
      "Can I lease my token to someone else if I can't  use it for the month?",
    answer:
      ' Yes, you can lease your token on the secondary market for someone else to enjoy. ',
  },
  {
    question:
      'If I sell my token, are there fees asssociated with the transaction?',
    answer:
      'Yes, all secondary sales on Opensea include 2.5% to Opensea and 10% to VCR Group, both of which are paid by the seller.',
  },
  {
    question:
      'What does my token pay for? Are F&B costs included in the token price?',
    answer:
      'Your token gives you membership and access to the restaurant. All food and beverage costs are additional.',
  },
  {
    question:
      'How does a token holder pay for their Food & Beverage while at the restaurant? Is it in Cryptocurrency or USD?',
    answer:
      'At the restaurant, all payments will be in USD, not cryptocurrency.',
  },
  {
    question:
      'If you are token holder, are you penalized if you do not use your token?',
    answer:
      ' No, however, we encourage all token holders to enjoy the restaurant and experience. ',
  },
  {
    question:
      "If I don't want to be a member any longer, can I sell my token? If so, how?",
    answer: 'You can sell your token on the secondary market (i.e: Opensea.io)',
  },
  {
    question: 'When will Flyfish Club open?',
    answer: 'We are anticipating a Q1/Q2 2023 opening.',
  },
];

export const AccordianSection = () => {
  return (
    <Box css={{width: 'min(1200px , 100% - 40px)', mx: 'auto'}}>
      <Flex as="section" direction="col" css={{'@bpmax3': {mt: 80}}}>
        <H2
          css={{
            color: '$gray9',
            fontFamily: '$primary',
            fontSize: '$7',
            '@bp3': {fontSize: '$8'},
          }}
        >
          Tokens
        </H2>
        <Accordian lists={tokenAccordian} />
      </Flex>
      <Flex as="section" direction="col" css={{my: 80}}>
        <H2
          css={{
            color: '$gray9',
            fontFamily: '$primary',
            fontSize: '$7',
            '@bp3': {fontSize: '$8'},
          }}
        >
          Membership
        </H2>
        <Accordian lists={membershipAccordian} />
      </Flex>
    </Box>
  );
};
