import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const { register, handleSubmit } = useForm<ILoginInfo>();
  const onSubmit: SubmitHandler<ILoginInfo> = (/* data: ILoginInfo */) => {
    history.push('/');
  };

  return (
    <form className="login-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-block">
        <h1>Account Login</h1>
        {Object.values(FormFields).map((item) => {
          const capitalize = `${item[0].toUpperCase()}${item.slice(1)}`;
          return (
            <label htmlFor={item} key={item}>
              <input id={item} placeholder={capitalize} {...register(item)} />
            </label>
          );
        })}
        <div className="btn-block">
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
