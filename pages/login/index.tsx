import { ReactElement } from 'react';
import { Container } from '@mui/material';
import Head from 'next/head';
import Layout from 'components/layout';
import LoginPart from 'partials/login';

function LoginPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container maxWidth="lg">
        <LoginPart />
      </Container>
    </>
  );
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default LoginPage;
