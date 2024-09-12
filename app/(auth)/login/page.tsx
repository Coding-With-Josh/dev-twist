'use client';

import { login, signup } from '@/actions/auth/login';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { pending } = useFormStatus();
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={(e) => login({ email, password }) 
    }>
        {pending ? 'Logging in...' : 'Log in'}
      </button>
      <button onClick={(e) => signup({ email, password })}>
        {pending ? 'Signing up...' : 'Sign up'}
      </button>
    </form>
  );
}
