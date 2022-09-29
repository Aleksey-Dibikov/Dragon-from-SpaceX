import { useState } from 'react';
import s from '../../style/FormRegister.module.css';
import style from '../../style/Dragon.module.css';

function LogInForm({ title, handleSubmit }) {
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

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(email, password)
        }} className={s.form} autoComplete="off">
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

            <button type="submit" className={style.btn}>{title}</button>
        </form>
    )
}

export default LogInForm;