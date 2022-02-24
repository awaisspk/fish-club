import {Header} from '@components/header';
import {PageLayout} from '@src/layouts';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Header />
    </PageLayout>
  );
};

export default Home;
