import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext';
import styles from './User.module.css';
import { useEffect } from 'react';
import useUser from '../hooks/useUser';
import useLogout from '../hooks/useLogout';

function User() {
  const { user } = useUser();
  const { logout } = useLogout();
  const navigate = useNavigate();
  function handleClick() {
    logout();
    navigate('/');
  }

  return (
    <div className={styles.user}>
      {/* <img src={user.avatar} alt={user.email} /> */}
      <span>Welcome, {user.email.split('.')[0]}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
    // <div>user</div>
  );
}

export default User;
