import axios from 'axios';
import qs from 'qs';
import { TProducts, TProductDetail } from 'interface/products';

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

async function getProductDetail(id: string | string[] | undefined): Promise<TProductDetail> {
  try {
    const params = qs.stringify({
      populate: {
        product_category: {
          fields: ['name']
        }
      }
    });
    const data = await axios.get(`/strapi/api/products/${id}?${params}`);
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default {
  getProduct,
  getProductDetail
};
