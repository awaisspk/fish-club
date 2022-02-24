import {Box} from '@components/box';
import {Header} from '@components/header';
import {Introduction} from '@components/introduction';
import {ImageContainer, Introduction} from '@components/introduction';
import {SecondaryNav} from '@components/nav';
import {H1} from '@components/typography';
import {PageLayout} from '@src/layouts';
import {styled} from '@stitches/react';
import type {NextPage} from 'next';

const Main = styled('main', {
  background: '#F5F9FC',
  mx: 'auto',
});

const Home: NextPage = () => {
  return (
    <Box css={{zIndex: 1}}>
      <PageLayout>
        <Header />
        <Main>
          <Box as="section" css={{mt: '100px', '@bp4': {mb: '80px'}}}>
            <H1
              css={{
                fontSize: 'clamp(2rem, 5vw + 1rem, 4.625rem)',
                fontWeight: '400',
                fontFamily: '$primary',
                textAlign: 'center',
                color: '$gray8',
              }}
            >
              How It Works
            </H1>
            <SecondaryNav />
            <Introduction />
          </Box>
          <Introduction />
        </Main>
      </PageLayout>
    </Box>
  );
};

export default Home;
