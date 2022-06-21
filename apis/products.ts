import axios from 'axios';
import qs from 'qs';
import { TProducts } from 'interface/products';

async function getProduct(): Promise<TProducts> {
  try {
    const query = qs.stringify({
      populate: {
        image: {
          fields: ['url']
        },
        product_category: {
          populate: '*'
        }
      }
    });
    const data = await axios.get(`/strapi/api/products?${query}`);
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default {
  getProduct
};
