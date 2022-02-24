import {Link} from '@components/button';
import {Flex} from '@components/flex';
import {styled} from '@stitches';
import React from 'react';

const links = [
  {url: 'introduction', label: 'Introduction'},
  {url: 'breakdown', label: 'Breakdown'},
  {url: 'reservation', label: 'Reservation & Entrance Policy'},
  {url: 'faqs', label: 'FAQs'},
];

const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'center',
  width: '$full',
  position: 'sticky',
  top: '0px',
  backdropFilter: 'blur(8px)',
  background: 'rgba(245, 249, 252, 0.5)',
  py: '$12',
  zIndex: '2',
});

const Ul = styled('ul', Flex, {
  fontFamily: '$secondary',
  fontWeight: '400',
  fontSize: '$8',
  gap: '$10',
  '& li': {
    listStyleType: 'none',
  },
});

export const SecondaryNav = () => {
  return (
    <Nav>
      <Ul wrap="wrap" center>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </Ul>
    </Nav>
  );
};
