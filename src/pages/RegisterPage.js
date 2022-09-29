import SignUp from '../components/SignUp';
import s from '../style/FormRegister.module.css';

function RegisterPage() {
  return (
    <div className={s.containerForm}>
      <h1>Registration page</h1>
      <SignUp />
    </div>
  )
}

export default RegisterPage;