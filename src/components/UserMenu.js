import { useDispatch } from 'react-redux';
import AuthSelector from '../hooks/authSelector';
import { logOutUser } from '../redux/Auth/AuthSlice';
import s from '../style/Navigation.module.css';
import style from '../style/Dragon.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const { email } = AuthSelector();

  return (
    <div>
      <span className={s.name}>Welcome, { email }</span>
      <button type="button"
        className={style.btn}
        onClick={()=> dispatch(logOutUser())}
      >
        Exit
      </button>
    </div>
  );
}