import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import './Login.scoped.scss';

const FormFields = {
  USERNAME: 'username',
  PASSWORD: 'password',
} as const;

interface ILoginInfo {
  [FormFields.USERNAME]: string;
  [FormFields.PASSWORD]: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<ILoginInfo>();
  const onSubmit: SubmitHandler<ILoginInfo> = (data: ILoginInfo) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login-block">
        {Object.values(FormFields).map((item) => (
          <label htmlFor={item} key={item}>
            <span>{item}:</span>
            <input id={item} {...register(item)} />
          </label>
        ))}
        <div className="btn-block">
          <input type="reset" value="Reset" />
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
