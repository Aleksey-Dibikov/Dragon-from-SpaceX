import { Route, Routes } from 'react-router-dom';
import { Dragon } from './pages/Dragon';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import { PublicRoute } from './routes/PublicRoute';
import AuthSelector from './hooks/authSelector';
import { PrivateRoute } from './routes/PrivateRoute';

import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import { Dragon2 } from './pages/Dragon2';

function App() {
  const {isAuth} = AuthSelector()

  return (
    <>
      <AppBar />
      <MobileNavigation />
      <Routes>
        <Route path="/"
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
