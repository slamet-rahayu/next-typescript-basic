import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  useForm,
  type UseFormRegister,
  type FieldErrorsImpl,
  type DeepRequired
} from 'react-hook-form';
import * as Yup from 'yup';
import regex from 'utils/regex';
import Actions from 'redux-local/actions/login';
import { IloginParam, ILoginRes } from 'interface/login';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

interface ILoginState {
  data: ILoginRes;
  isLoading: boolean;
  isError: string;
}

interface ILoginHook {
  register: UseFormRegister<IloginParam>;
  submit: () => {};
  errors: FieldErrorsImpl<DeepRequired<IloginParam>>;
  loginRes: ILoginState;
}

export default function useLogin(): ILoginHook {
  const msgRequired = 'This field is required!';
  const msgPasswordPattern =
    'Password must be at least 8 characters contain 1 uppercase letter, 1 number, and 1 special chars';
  const loginRes = useSelector((state: any) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginRes.isError) {
      toast.error(loginRes.isError, { position: 'top-right', autoClose: 3000 });
    }
  }, [loginRes]);

  const validationSchema = Yup.object().shape({
    identifier: Yup.string().required(msgRequired).email('Please Input a valid email'),
    password: Yup.string().required(msgRequired).matches(regex.passwordPattern, msgPasswordPattern)
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IloginParam>(formOptions);

  function onSubmit(data: IloginParam): void {
    dispatch({ type: Actions.POST_LOGIN_REQUESTED, payload: data });
  }

  const submit = handleSubmit(onSubmit);

  return {
    register,
    submit,
    errors,
    loginRes
  };
}
