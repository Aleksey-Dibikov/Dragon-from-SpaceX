import { Route, Routes } from 'react-router-dom';
import { Dragon } from './pages/Dragon';
import AppBar from './components/AppBar';
import { Login } from './pages/LogIn';
import { Register } from './pages/Register';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/dragon"
          element={<Dragon />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </>
  );
}

export default App;
