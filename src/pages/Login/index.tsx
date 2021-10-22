import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import './Login.scoped.scss';

interface ILoginInfo {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<ILoginInfo>();
  const onSubmit: SubmitHandler<ILoginInfo> = (data) => console.log(data);

  return <form onSubmit={handleSubmit(onSubmit)}>
    <div className="login-block">
      <label htmlFor="username">
        <span>Username:</span>
        <input {...register('username')} />
      </label>
      <label htmlFor="password">
        <span>Password:</span>
        <input {...register('password')} />
      </label>
      <input type="reset" value="Reset"/>
      <button type="submit">Login</button>
    </div>
  </form>;
};

export default Login;
