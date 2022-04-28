import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import UpdateBlog from '../pages/UpdateBlog';

const AppRouter = () => {
  const user = useSelector(state => state.userReducer.user);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {user && <Route path='/detail/:id' element={<Details />} />}
        {user && <Route path='/new-blog' element={<NewBlog />} />}
        {user && <Route path='/update-blog/:id' element={<UpdateBlog />} />}
        {!user && <Route path='/login' element={<Login />} />}
        {!user && <Route path='/register' element={<Register />} />}
        {user && <Route path='/profile/:id' element={<Profile />} />}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
