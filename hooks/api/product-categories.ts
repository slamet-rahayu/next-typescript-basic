import { useEffect, useState } from 'react';
import productCategories from 'apis/product_category';
import { IHookRes } from 'interface/res-api';
import { IProductCategData } from 'interface/product-categories';

function useGetPCateg(): IHookRes<IProductCategData[]> {
  const [data, setData] = useState<IProductCategData[]>([]);
  const [isLoading, setIsloding] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  async function getData(): Promise<void> {
    try {
      const res = await productCategories.getProductCategory();
      setData(res.data);
    } catch (error: any) {
      setIsError(true);
      console.log(error);
      throw new Error(error.message);
    } finally {
      setIsloding(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return {
    isLoading,
    isError,
    data
  };
}

export default {
  useGetPCateg
};
