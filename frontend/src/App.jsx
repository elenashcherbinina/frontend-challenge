import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Favorite from './pages/favorite/Favorite';
import Layout from './pages/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
}

export default App;
