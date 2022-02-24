import {Box} from '@components/box';
import {Flex} from '@components/flex';
import {SiteLogo, SiteLogoMobile} from '@components/icons';
import {Nav} from '@components/nav';
import {styled} from '@stitches';

const StyledHeader = styled('div', Flex, {
  width: '1200px',
});

const BgGradiant = styled('div', {
  linearGradiant: 'to right, $indigo9 , $sky9 ',
  filter: 'blur(24px)',
  opacity: '0.99',
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: '-1',
});

export const Header = () => {
  return (
    <Flex
      center
      css={{
        position: 'relative',
        minW: '$full',
        background: '$whiteA12',
      }}
    >
      <StyledHeader
        justify="spaceBtw"
        align="center"
        css={{mx: '$5', '@bp3': {max: '30px'}}}
      >
        <Box css={{'@bp3': {display: 'none'}}}>
          <SiteLogoMobile />
        </Box>
        <Box css={{display: 'none', '@bp3': {display: 'block'}}}>
          <SiteLogo />
        </Box>
        <Nav />
      </StyledHeader>
      <BgGradiant />
    </Flex>
  );
};
