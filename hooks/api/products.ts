import { useEffect, useState } from 'react';
import { IHookRes } from 'interface/res-api';
import type { TProducts } from 'interface/products';
import products from 'apis/products';

function useGetProducts(): IHookRes<TProducts> {
  const [data, setData] = useState<TProducts>({} as TProducts);
  const [isLoading, setIsloding] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  async function getData(): Promise<void> {
    try {
      const res = await products.getProduct();
      setData(res);
    } catch (error: any) {
      console.log(error);
      setIsError(true);
      throw new Error(error.message);
    } finally {
      setIsloding(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
    isError
  };
}

export default {
  useGetProducts
};
