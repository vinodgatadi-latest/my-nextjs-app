'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login } from '../../services/auth.service';

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(username, password);

      router.push('/home');
      router.refresh();

    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Invalid username or password'
      );
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: 400 }}>
        <h3 className="text-center mb-4">Login</h3>
        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}
        <form onSubmit={onLogin}>
          <div className="mb-3">
            <label className="form-label">
              Username
            </label>

            <input
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}