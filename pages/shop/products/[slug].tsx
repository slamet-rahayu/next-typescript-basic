import { Container } from '@mui/material';
import { ReactElement } from 'react';
import Head from 'next/head';
// import { useRouter } from 'next/router';
// import products from 'hooks/api/products';
import ShopLayout from 'components/shop-layout';
// import ProductDetailPart from 'partials/shop/products/detail';

export default function ProductDetail(): ReactElement {
  // const router = useRouter();
  // const {
  //   query: { slug }
  // } = router;
  return (
    <>
      <Head>{/* <title>{slug?.replace(/-/g, ' ')}</title> */}</Head>
      <Container maxWidth="xl" />
    </>
  );
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <ShopLayout>{page}</ShopLayout>;
};
