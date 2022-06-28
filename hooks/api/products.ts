import { useEffect, useState } from 'react';
import { IHookRes } from 'interface/res-api';
import type { TProducts, TProductDetail } from 'interface/products';
import products from 'apis/products';

function useGetProducts(): IHookRes<TProducts> {
  const [data, setData] = useState<TProducts>({} as TProducts);
  const [isLoading, setIsloding] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
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
    getData();
  }, []);

  return {
    data,
    isLoading,
    isError
  };
}

function useGetProductDetail(id: string | string[] | undefined): IHookRes<TProductDetail> {
  const [data, setData] = useState<TProductDetail>({} as TProductDetail);
  const [isLoading, setIsloding] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    async function getData(): Promise<void> {
      try {
        const res = await products.getProductDetail(id);
        setData(res);
      } catch (error: any) {
        console.log(error);
        setIsError(true);
        throw new Error(error.message);
      } finally {
        setIsloding(false);
      }
    }
    if (id) {
      getData();
    }
  }, [id]);

  return {
    data,
    isLoading,
    isError
  };
}

export default {
  useGetProducts,
  useGetProductDetail
};
