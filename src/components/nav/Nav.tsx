import {Button, IconBtn, Link} from '@components/button';
import {MenuIcon} from '@components/icons';
import {styled} from '@stitches';
import {useState} from 'react';

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
  '@bpmax3': {
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
  variants: {
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <Container>
      <IconBtn
        center
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        css={{display: 'none', '@bpmax3': {display: 'block'}}}
      >
        <MenuIcon />
      </IconBtn>

      <StyledNav close={!isMenuOpen}>
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            onClick={handleCloseMenu}
            css={{fontFamily: '$primary', '@bp3': {fontFamily: '$secondary'}}}
          >
            {link.label}
          </Link>
        ))}
        <Button onClick={handleCloseMenu}>Sign in</Button>
      </StyledNav>
    </Container>
  );
};
