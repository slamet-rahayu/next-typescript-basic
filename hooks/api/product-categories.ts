import { useEffect, useState } from 'react';
import productCategories from 'apis/product_category';
import { IHookRes } from 'interface/res-api';
import { IProductCategData, TProductCategory } from 'interface/product-categories';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'redux-local/actions/product-category';

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

function useGetPCategSaga(): IHookRes<TProductCategory> {
  const pCategCalls = useSelector((state: any) => state.productscategory);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(initGetPCateg('lol'));
    dispatch({ type: Actions.GET_PCATEG_REQUESTED, payload: 'hello' });
  }, [dispatch]);

  return {
    isLoading: pCategCalls.isLoading,
    isError: pCategCalls.isError,
    data: pCategCalls.data
  };
}

export default {
  useGetPCateg,
  useGetPCategSaga
};
