import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/Admin/Login';
import Home from './components/Home';

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;