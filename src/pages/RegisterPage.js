import { useEffect, useState } from 'react';
import Logo from '../img/logo.png';
import SignUp from '../components/SignUp';
import s from '../style/FormRegister.module.css';
import Spinner from '../components/Spinner/Spinner';

function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    isLoading ? <Spinner/> : <>
      <img src={Logo} alt="dragon logo" className={s.imgLogo} />
      <div className={s.containerForm}>
        <h1>Registration page</h1>
        <SignUp />
      </div>
    </>
  )
}

export default RegisterPage;