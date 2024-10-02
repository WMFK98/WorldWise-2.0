import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import PageNav from '../ui/PageNav';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import Button from '../ui/Button';
import useUser from '../hooks/useUser';
import Spinner from '../ui/Spinner';
import useLogin from '../hooks/useLogin';

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const navigate = useNavigate();
  const [email, setEmail] = useState('wishira2013@coth@gmail.com');
  const [password, setPassword] = useState('0827063076');
  const { isAuthenticated, isLoading } = useUser();
  const { login, isLoading: isChecking } = useLogin();

  useEffect(() => {
    if (isAuthenticated) navigate('/app');
  }, [isAuthenticated]);

  if (isLoading || isChecking) return <Spinner />;
  return (
    <main className={styles.login}>
      <PageNav />
      <div className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" onClick={() => login({ email, password })}>
            Login
          </Button>
        </div>
      </div>
    </main>
  );
}
