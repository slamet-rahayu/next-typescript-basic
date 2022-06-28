import { Box, Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';
import Image from 'next/image';
import { IPorudctDetailPart } from './interface';

export default function ProductDetailPart(props: IPorudctDetailPart): ReactElement {
  const { img, imgAlt } = props;
  return (
    <Grid container>
      <Grid item lg={3}>
        <Image src={img} alt={imgAlt} layout="fill" />
      </Grid>
      <Grid item lg={9}>
        <Typography variant="h6">Nama Produk</Typography>
        <Typography variant="body1">Stok: </Typography>
        <Box>
          <Typography variant="body1">Deskriopsi</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
