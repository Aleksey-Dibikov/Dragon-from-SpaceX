import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import AuthSelector from './hooks/authSelector';
import AppBar from './components/AppBar';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import Dragon from './pages/Dragon';
import Dragon2 from './pages/Dragon2';
import Container from './pages/Container';
import Spinner from './components/Spinner/Spinner';

function App() {
  const { isAuth } = AuthSelector();



  return (
    <Spinner/> && <>
      <AppBar />
      <MobileNavigation />
      <Routes>
        <Route path="/"
          element={<Container/>}
        />
        <Route path="/home"
          element={<HomePage/>}
        />
        <Route path="/login"
          element={<PublicRoute
            isAuth={isAuth}
            component={LogInPage}
          />}
        />
        <Route path="/register"
          element={<PublicRoute
            isAuth={isAuth}
            component={RegisterPage}
          />}
        />
        <Route path="/dragon"
          element={<PrivateRoute
            isAuth={isAuth}
            component={Dragon}
          />}
        />
        <Route path="/dragon2"
          element={<PrivateRoute
            isAuth={isAuth}
            component={Dragon2}
          />}
        />
      </Routes>
    </>
  );
}

export default App;
