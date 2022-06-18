import { ReactElement } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import Image from 'next/image';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import ProductCategories from './product-categories';

export default function HeaderShop(): ReactElement {
  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid item lg={8} display="flex" justifyContent="space-between">
                <Image src="/tokopaedis.png" width={280} height={0} />
                {/* <Button variant="text" size="small" sx={{ ml: 2 }}>
                  <Typography sx={{ color: 'white' }}>Kategori</Typography>
                </Button> */}
                <ProductCategories />
                <TextField
                  placeholder="Cari Powerbank"
                  fullWidth
                  sx={{ ml: 2, background: 'white', borderRadius: '5px' }}
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item lg={4} display="flex" justifyContent="flex-end">
                <Box display="flex">
                  <IconButton>
                    <Badge badgeContent={10} color="warning" showZero={false}>
                      <ShoppingCartIcon sx={{ color: 'white' }} />
                    </Badge>
                  </IconButton>
                  <IconButton>
                    <Badge badgeContent={6} color="warning" showZero={false}>
                      <NotificationsIcon sx={{ color: 'white' }} />
                    </Badge>
                  </IconButton>
                  <IconButton>
                    <Badge badgeContent={11} color="warning" showZero={false}>
                      <MailIcon sx={{ color: 'white' }} />
                    </Badge>
                  </IconButton>
                  <Box
                    sx={{
                      ml: 2,
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#3886d3',
                      px: 1,
                      borderRadius: '5px'
                    }}
                  >
                    <Typography>Mamer</Typography>
                    <IconButton>
                      <AccountCircle sx={{ color: 'white' }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
