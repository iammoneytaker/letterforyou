import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
