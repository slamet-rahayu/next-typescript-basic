import { ReactElement, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import qs from 'qs';

export default function TestPage(): ReactElement {
  useEffect(() => {
    const query = qs.stringify({
      populate: {
        image: {
          fields: ['url']
        },
        product_category: {
          populate: '*'
        }
      },
      filters: {
        product_category: {
          id: 6
        }
      }
    });

    axios({
      method: 'GET',
      url: `/strapi/api/products?${query}`
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    console.log(query);
  }, []);

  return (
    <Box>
      <Button type="button">test fetch with qs</Button>
    </Box>
  );
}
