import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';
import products from 'hooks/api/products';
import { useRouter } from 'next/router';
import styles from './styles/products.module.scss';

export default function ShopProductList(): ReactElement {
  const { data, isError, isLoading } = products.useGetProducts();

  const router = useRouter();

  function handleProductClick(slug: string, id: string | number): void {
    router.push(`/shop/products/${slug}?id=${id}`);
  }

  return (
    <Box>
      <Grid container spacing={5}>
        {!isError &&
          !isLoading &&
          data.data.map((v) => {
            const imgUrl = `/strapi${v.attributes.image.data[0].attributes.url}`;
            const onCardClick = (): void => {
              handleProductClick(v.attributes.slug, v.id);
            };
            return (
              <Grid item lg={3} key={v.id}>
                <Card className={styles.card} onClick={onCardClick}>
                  <CardMedia component="img" alt={v.attributes.name} image={imgUrl} height={250} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body1"
                      fontWeight="bold"
                      fontFamily="Roboto"
                      component="div"
                    >
                      {v.attributes.name.substring(0, 100)}
                    </Typography>
                    <Typography>{v.attributes.product_category.data.attributes.name}</Typography>
                    <Typography>$ {v.attributes.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
