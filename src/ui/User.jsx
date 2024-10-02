import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext';
import styles from './User.module.css';
import { useEffect } from 'react';
import useUser from '../hooks/useUser';

function User() {
  const { user } = useUser(),
    logout = null;
  console.log(user);
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

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
