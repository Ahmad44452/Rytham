import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getArtistsApi } from './store/api/artistApi';
import { getAlbumsApi } from './store/api/albumApi';
import { getSongsApi } from './store/api/songApi';

import AdminLogin from './components/Admin/Login';
import AdminDashboardAlbums from './components/Admin/Dashboard/Albums';
import AdminDashboardArtists from './components/Admin/Dashboard/Artists';
import AdminDashboardSongs from './components/Admin/Dashboard/Songs';

import Home from './components/Home';
import { useEffect } from 'react';

const AppRoutes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistsApi());
    dispatch(getAlbumsApi());
    dispatch(getSongsApi());
  }, [dispatch]);

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