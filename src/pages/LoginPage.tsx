import React from 'react';
import LoginSignupForm from '../components/LoginSignupForm';
import './style.scss';

export default function LoginPage() {
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <LoginSignupForm />
    </div>
  );
}
