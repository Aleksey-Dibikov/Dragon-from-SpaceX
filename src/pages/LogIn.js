import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/Auth/AuthOperation';
import s from '../style/FormRegister.module.css';
import style from '../style/Dragon.module.css';

export function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.containerForm}>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit}className={s.form} autoComplete="off">
        <label className={s.label}>
          Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <button type="submit" className={style.btn}>Enter</button>
      </form>
    </div>
  );
}