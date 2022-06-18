import { useEffect, useState } from 'react';
import productCategories from 'apis/product_category';

import { IProductCategData } from 'interface/product-categories';

interface Icateg {
  pCategories: IProductCategData[];
  isLoading: boolean;
  isError: boolean;
}

function useGetPCateg(): Icateg {
  const [pCategories, setPcategories] = useState<IProductCategData[]>([]);
  const [isLoading, setIsloding] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  async function getData(): Promise<any> {
    try {
      const data = await productCategories.getProductCategory();
      setPcategories(data.data);
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
    pCategories
  };
}

export default {
  useGetPCateg
};
