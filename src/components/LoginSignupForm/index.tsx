import React, { useState } from 'react';
import {
  Row,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';

function handleLogin(e: any) {
  e.preventDefault();
  console.log('e.target.email', e.target.email.value);
  console.log('e.target.password', e.target.password.value);
}

export default function LoginSignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event: any) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: any) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <div className="Login">
        <Row>
          <form onSubmit={handleLogin}>
            <FormGroup controlId="email">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={handleEmailChange}
                value={email}
              />
            </FormGroup>
            <FormGroup controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                value={password}
              />
            </FormGroup>
            <Button type="submit">Sign-In</Button>
          </form>
        </Row>
      </div>
    </div>
  );
}
