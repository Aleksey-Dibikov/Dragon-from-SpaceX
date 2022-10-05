import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthSelector from '../hooks/authSelector';
import s from '../style/Navigation.module.css';

function AppBar() {
  const { isAuth } = AuthSelector();

  return (
    <header className={s.headerNav}>
      <Navigation />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );  
}

export default AppBar;