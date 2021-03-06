import {Box} from '@components/box';
import {Flex} from '@components/flex';
import {Header} from '@components/header';
import {Introduction} from '@components/introduction';
import {SecondaryNav} from '@components/nav';
import {H1, H2, Paragraph} from '@components/typography';
import {PageLayout} from '@src/layouts';
import {styled} from '@stitches/react';
import Image from 'next/image';
import type {NextPage} from 'next';
import {
  Breakdown1,
  Breakdown2,
  Breakdown3,
  Breakdown4,
} from '@components/breakdown';
import {Footer} from '@components/footer';
import {Faqs} from '@components/faqs/Faqs';

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
          <Box
            as="section"
            css={{minH: '100vh', mt: '100px', '@bp4': {mb: '80px'}}}
          >
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
            <Box css={{my: 80}}>
              <Introduction />
            </Box>
            <Flex
              as="section"
              direction="col"
              gap="6"
              css={{
                width: 'min(900px, 100% - 40px)',
                bc: '$indigo4',
                br: '2rem',
                mx: 'auto',
                padding: '2rem',
                '@bp2': {
                  padding: '3rem',
                },
              }}
            >
              <H2
                css={{
                  textAlign: 'center',
                  color: '$gray9',
                  fontFamily: '$primary',
                }}
              >
                why NFT?
              </H2>
              <Paragraph>
                As an NFT, the membership becomes an asset to the token holder,
                which can later be sold, transferred or leased to others on the
                secondary market. By utilizing NFT&apos;s, FFC is able to create
                a loyal, member-community that we can provide special
                experiences for. NFT&apos;s create new modernistic financial
                models, which will allow FFC to deliver an exceptional and
                sustainable product for years to come.
              </Paragraph>
            </Flex>
            <Box
              css={{
                borderRadius: '0',
                my: '80px',
                width: '100%',
                height: '250px',
                position: 'relative',
                overflow: 'hidden',
                '@bp1': {
                  height: '320px',
                },
                '@bp2': {
                  height: '420px',
                },
                '@bp3': {
                  height: '550px',
                },
              }}
            >
              <Image
                src="/images/tunacaviar.webp"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </Box>
            <Flex direction="col" css={{'@bpmax3': {gap: 100}}}>
              <Breakdown1 />
              <Breakdown2 />
              <Breakdown3 />
              <Breakdown4 />
            </Flex>
            <Faqs />
          </Box>
        </Main>
        <Footer />
      </PageLayout>
    </Box>
  );
};

export default Home;
