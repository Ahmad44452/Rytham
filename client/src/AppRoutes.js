import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/Admin/Login';
import AdminDashboardAlbums from './components/Admin/Dashboard/Albums';
import AdminDashboardArtists from './components/Admin/Dashboard/Artists';
import AdminDashboardSongs from './components/Admin/Dashboard/Songs';

import Home from './components/Home';

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/admindashboard/albums' element={<AdminDashboardAlbums />} />
        <Route path='/admindashboard/artists' element={<AdminDashboardArtists />} />
        <Route path='/admindashboard/songs' element={<AdminDashboardSongs />} />

      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;