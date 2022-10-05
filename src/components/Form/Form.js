import { useState } from 'react';
import s from '../../style/FormRegister.module.css';
import style from '../../style/Dragon.module.css';


function Form({ title, handleSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorSymbol, setErrorSymbol] = useState('*');
  const [emailError, setEmailError] = useState('This is a required field!')
  const [passwordError, setPasswordError] = useState('This is a required field!');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);


  const blurHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        setEmailDirty(true);
        break
      case 'password':
        setPassword(value);
        setPasswordDirty(true)
        break
      default:
        return;
    }
  };

  function handleChangeEmail({ target: { value } }) {
    setEmail(value);
    (!value)
      ? setEmailError('This is a required field!')
      : setEmailError('');
  }

  function handleChangePassword ({ target: { value } }) {
    setPassword(value);
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters!')
    if (!value) {
      setPasswordError('This is a required field!')
    }
    } else {
      setPasswordError('')
    }
  };


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(email, password);
    }} className={s.form} autoComplete="off">
      <label className={s.label}>
        Mail
        <input
          onBlur={blurHandler}
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          className={s.input}
        />
        {emailDirty && emailError && (
          <div style={{ display: 'flex' }}>
            <span style={{ color: '#EB5757', fontSize: 10, margin: 4 }}>
            {errorSymbol}{' '}
            </span>
            <div style={{ color: '#EB5757', fontSize: 13, marginTop: 4 }}>
              {emailError}{' '}
            </div>
          </div>
        )}
      </label>

      <label className={s.label}>
        Password
        <input
          onBlur={blurHandler}
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          className={s.input}
        />
        {passwordDirty && passwordError && (
          <div style={{ display: 'flex' }}>
            <span style={{ color: '#EB5757', fontSize: 10, margin: 4 }}>
            {errorSymbol}{' '}
            </span>
            <div style={{ color: '#EB5757', fontSize: 13, marginTop: 4 }}>
              {passwordError}{' '}
            </div>
          </div>
        )}
      </label>

      <button type="submit" className={style.btn}>{title}</button>
    </form>
  );
}

export default Form;