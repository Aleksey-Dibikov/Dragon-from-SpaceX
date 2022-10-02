import Logo from '../img/DragonLogo.png';
import LogIn from '../components/LogIn';
import s from '../style/FormRegister.module.css';

function LogInPage() {
  return (
    <>
      <img src={Logo} alt="dragon logo" className={s.imgLogo} />
     <div className={s.containerForm}>
      <h1>Login page</h1>
      <LogIn />
    </div>
    </>
  )
}

export default LogInPage;