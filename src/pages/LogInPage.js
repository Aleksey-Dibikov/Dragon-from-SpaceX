import Logo from '../img/DragonLogo.png';
import LogIn from '../components/LogIn';
import s from '../style/FormRegister.module.css';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner/Spinner';

function LogInPage() {
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
        <h1>Login page</h1>
        <LogIn />
      </div>
    </>
  )
}

export default LogInPage;