/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type Array = [{
  username?: string,
  email?: string,
  password?: string,
}];

const SignUp: FC = () => {
  const arr: Array = [{}];
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onChangeUsername (e: { target: { value: any; }; }) {
    setUsername(e.target.value);
  }
  function onChangeEmail(e: { target: { value: any } }) {
    setEmail(e.target.value);
  }

   function onChangePassword(e: { target: { value: any } }) {
     setPassword(e.target.value);
   }

   onClickCreate({ username, email, password });

  function onClickCreate({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
     arr.push({ username: username, email: email, password: password });
  }

  // eslint-disable-next-line no-console
  //console.log(arr);

  return (
    <Form className="w-25 p-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control placeholder="Enter unic username" onChange={onChangeUsername}/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Create Password" onChange={onChangePassword}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show my password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onClickCreate}>
        Create
      </Button>
    </Form>
  );
};

export { SignUp };
