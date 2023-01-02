import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getArtistsApi } from './store/api/artistApi';
import { getAlbumsApi } from './store/api/albumApi';
import { getSongsApi } from './store/api/songApi';

import AdminLogin from './components/Admin/Login';
import AdminDashboardAlbums from './components/Admin/Dashboard/Albums';
import AdminDashboardArtists from './components/Admin/Dashboard/Artists';
import AdminDashboardSongs from './components/Admin/Dashboard/Songs';
import NotFound from './components/404';

import HomeDefault from './components/Home/HomeDefault';
import BrowseAlbums from './components/Home/BrowseAlbums';
import BrowseArtists from './components/Home/BrowseArtists';
import BrowseSongs from './components/Home/BrowseSongs';
import GetAlbumById from './components/Home/GetAlbumById';
import GetArtistById from './components/Home/GetArtistById';
import SearchPage from './components/Home/Search';

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
        <Route path='/' element={<HomeDefault />} />
        <Route path='/albums' element={<BrowseAlbums />} />
        <Route path='/artists' element={<BrowseArtists />} />
        <Route path='/songs' element={<BrowseSongs />} />
        <Route path='/albums/:albumId' element={<GetAlbumById />} />
        <Route path='/artists/:artistId' element={<GetArtistById />} />
        <Route path='/search/:searchQuery' element={<SearchPage />} />


        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/admindashboard/albums' element={<AdminDashboardAlbums />} />
        <Route path='/admindashboard/artists' element={<AdminDashboardArtists />} />
        <Route path='/admindashboard/songs' element={<AdminDashboardSongs />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;