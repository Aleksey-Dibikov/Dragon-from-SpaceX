import { Route, Routes } from 'react-router-dom';
import { Dragon } from './pages/Dragon';

function App() {

  return (
      <Routes>
        <Route
          path='/'
          element={<Dragon/>}
        />
      </Routes>
  );
}

export default App;
