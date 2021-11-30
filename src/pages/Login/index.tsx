import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Icons from '@components/Icons';
import './Login.scoped.scss';

const FormFields = {
  USERNAME: 'username',
  PASSWORD: 'password',
} as const;

interface ILoginInfo {
  [FormFields.USERNAME]: string;
  [FormFields.PASSWORD]: string;
}

const FormFieldsType = {
  [FormFields.USERNAME]: 'text',
  [FormFields.PASSWORD]: 'password',
} as const;

const FormFieldsIcon = {
  [FormFields.USERNAME]: 'user',
  [FormFields.PASSWORD]: 'key',
} as const;

const FormFieldsPlaceholderText = {
  [FormFields.USERNAME]: 'Enter Username',
  [FormFields.PASSWORD]: 'Enter Password',
} as const;

const Login: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<ILoginInfo>();
  const onSubmit: SubmitHandler<ILoginInfo> = (/* data: ILoginInfo */) => {
    history.push('/');
  };

  return (
    <Form className="login-wrapper shadow" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-block">
        <h1>Account Login</h1>
        {Object.values(FormFields).map((item) => (
          <InputGroup className="mb-3" key={item}>
            <InputGroup.Text>
              <Icons iconString={FormFieldsIcon[item]} />
            </InputGroup.Text>
            <Form.Control
              id={item}
              placeholder={FormFieldsPlaceholderText[item]}
              type={FormFieldsType[item]}
              {...register(item)} />
          </InputGroup>
        ))}
        <div className="btn-block">
          <Button
            className="px-5 shadow-sm"
            size="lg"
            type="submit"
            variant="primary"
          >Login</Button>
        </div>
      </div>
    </Form>
  );
};

export default Login;
