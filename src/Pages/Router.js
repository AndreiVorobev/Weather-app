import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import WeatherPage from './WeatherPage';

class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/authpage' element={<AuthPage />}></Route>
        <Route path='/profilepage' element={<ProfilePage />}></Route>
        <Route path='/weatherpage' element={<WeatherPage />}></Route>
      </Routes>
    );
  }
}

export default Router;
