import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage  from './AuthPage';
import ProfilePage  from './ProfilePage';
import  WeatherPage  from './WeatherPage';

class App extends React.Component {
  render() {
    return ( 
      <Routes>
        <Route path='/' element={<AuthPage/>}>
        </Route>
        <Route path='/profilepage' element={<ProfilePage/>}></Route>
        <Route path='/weatherpage' element={<WeatherPage/>}></Route>
      </Routes>
    )
  }
}

export default App;

