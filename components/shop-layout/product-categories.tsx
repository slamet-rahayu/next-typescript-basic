import { ReactElement } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import PCateg from 'hooks/api/product-categories';
import styles from './styles/product-categories.module.scss';

export default function ProductCategories(): ReactElement {
  const { useGetPCateg } = PCateg;
  const { isLoading, isError, pCategories } = useGetPCateg();
  return (
    <Box className={styles.list}>
      <Typography variant="body1">Kategori</Typography>
      <Box className={styles.listitem}>
        <List>
          {!isLoading &&
            !isError &&
            pCategories.map((v: any) => (
              <ListItem key={v.id}>
                <ListItemText primary={v.attributes.name} />
              </ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
}
