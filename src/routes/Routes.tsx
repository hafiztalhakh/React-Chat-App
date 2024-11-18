import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Protected';
import Chat from '../screens/chat';
import Login from '../screens/login';
import Register from '../screens/register';
import ForgotPassword from '../screens/forgot-password';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<Chat />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;
