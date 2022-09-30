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
        {isAuth ? <UserMenu/> : <AuthNav />}
      </header>
    );
}

export default AppBar;