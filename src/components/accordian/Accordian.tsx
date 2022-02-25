/* eslint-disable react/display-name */
import React from 'react';
import {styled, keyframes} from '@stitches';
import {violet, blackA, mauve} from '@radix-ui/colors';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronIcon} from '@components/icons';
import {Text} from '@components/typography';
import {Flex} from '@components/flex';

const slideDown = keyframes({
  from: {height: 0},
  to: {height: 'var(--radix-accordion-content-height)'},
});

const slideUp = keyframes({
  from: {height: 'var(--radix-accordion-content-height)'},
  to: {height: 0},
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: '$full',
  backgroundColor: 'transparent',
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
});

const StyledChevron = styled(ChevronIcon, {
  color: violet.violet10,
  mr: '30px',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: '$secondary',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: '0px 10px',
  height: 90,
  flex: 1,
  fontSize: '$1',
  display: 'grid',
  gridTemplateColumns: '20px 1fr 50px',
  '@bp3': {
    gridTemplateColumns: '50px 1fr 50px',
    fontSize: '$3',
  },
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '$full',
  gap: '$10',
  fontWeight: '$600',
  lineHeight: 1,
  color: '$gray9',
  '&[data-state="open"]': {
    [`${Text}`]: {
      color: '$gray6',
    },
  },

  '&[data-state="open"] svg': {
    transform: 'rotate(180deg)',
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  },

  '&[data-state="closed"] svg': {
    transform: 'rotate(360deg)',
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  },
  '&:hover': {backgroundColor: '$sky2'},
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: '$1',
  '@bp3': {
    fontSize: '$3',
  },
  fontFamily: '$secondary',
  color: '$gray7',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
  display: 'flex',
  gap: '$5',
  alignItems: 'center',
});

export const AccordionItem = StyledItem;

type List = {
  question: string;
  answer: string;
};

type AccordianProps = {
  lists: List[];
};

export const Accordian = ({lists}: AccordianProps) => (
  <StyledAccordion type="single" defaultValue="item-1" collapsible>
    {lists.map((list, i) => (
      <AccordionItem value={list.question} key={i}>
        <StyledHeader>
          <StyledTrigger>
            <Text
              css={{
                fontSize: '$6',
                '@bp3': {
                  fontSize: '$8',
                },
                color: '$indigoA11',
                fontFamily: '$secondary',
              }}
            >
              Q:{' '}
            </Text>
            <span>{list.question}</span>
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>
        <StyledContent>
          <StyledContentText>
            <Text
              css={{
                fontSize: '$6',
                '@bp3': {
                  fontSize: '$8',
                },
                color: '$gray6',
                fontFamily: '$secondary',
              }}
            >
              A:{' '}
            </Text>
            {list.answer}
          </StyledContentText>
        </StyledContent>
      </AccordionItem>
    ))}
  </StyledAccordion>
);
