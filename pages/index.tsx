import {Box} from '@components/box';
import {Header} from '@components/header';
import {SecondaryNav} from '@components/nav';
import {H2} from '@components/typography';
import {PageLayout} from '@src/layouts';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Header />
      <main>
        <Box as="section" css={{minH: '200vh', mt: '100px', mb: '50px'}}>
          <H2
            css={{
              fontSize: 'clamp(2rem, 5vw + 1rem, 4.625rem)',
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            How It Works
          </H2>
          <SecondaryNav />
        </Box>
      </main>
    </PageLayout>
  );
};

export default Home;
