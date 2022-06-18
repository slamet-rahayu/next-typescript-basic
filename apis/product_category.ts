import axios from 'axios';
import { IProductCategRes } from 'interface/product-categories';

async function getProductCategory(): Promise<IProductCategRes> {
  try {
    const data = await axios.get('/strapi/api/product-categories');
    return data.data;
  } catch (error: any) {
    const { message } = error;
    throw new Error(message);
  }
}

const apisObj = {
  getProductCategory
};

export default apisObj;
