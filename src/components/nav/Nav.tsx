import {Button, IconBtn, Link} from '@components/button';
import {MenuIcon} from '@components/icons';
import {styled} from '@stitches';
import {useState} from 'react';
import useMedia from 'use-media';

const links = [
  {url: '#', label: 'About'},
  {url: '#', label: 'How it works'},
  {url: '#', label: 'Membership'},
];

const StyledNav = styled('nav', {
  display: 'flex',
  gap: '$15',
  transition: 'all 300ms',
  width: 'max-content',
  variants: {
    mobile: {
      true: {
        position: 'fixed',
        gap: '$6',
        fd: 'column',
        br: '$lg',
        right: '5%',
        bc: '$whiteA12',
        px: '$8',
        py: '$9',
        boxShadow: '$shadow1',
      },
    },
    close: {
      true: {
        right: '-200%',
      },
    },
  },
});

const Container = styled('div', {
  width: 'max-content',
});

export const Nav = () => {
  const isMobile = useMedia({maxWidth: 750}, true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <Container>
      {isMobile && (
        <IconBtn center onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon />
        </IconBtn>
      )}

      <StyledNav mobile={isMobile} close={!isMenuOpen}>
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            onClick={handleCloseMenu}
            css={{fontFamily: isMobile ? '$primary' : '$secondary'}}
          >
            {link.label}
          </Link>
        ))}
        <Button mobile={isMobile} onClick={handleCloseMenu}>
          Sign in
        </Button>
      </StyledNav>
    </Container>
  );
};
