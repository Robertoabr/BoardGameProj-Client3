import React, { FormEvent } from 'react';
import {
  Row,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';

function handleInputChange(e: FormEvent) {
  console.log('e', e);
}

function handleLogin() {
  console.log('login fired');
}

export default function LoginSignupForm() {
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
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button type="submit">Sign-In</Button>
          </form>
        </Row>
      </div>
    </div>
  );
}
