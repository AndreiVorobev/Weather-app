import React from 'react';
import AuthPage from './AuthPage';
import Router from './Router';
import { AuthProvider } from './contexts/AuthContext';
import ProfilePage from './ProfilePage';
import WeatherPage from './WeatherPage';

//GET WEATHER
// const API_KEY = "b49525870afe1ead9c41b43350b56cce";
// getWeather = async () => {
//   const API_URL = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`
//   );

//   const data = await API_URL.json();
//   console.log(data);
// };

class App extends React.Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <WeatherPage />
          <ProfilePage />
          <AuthPage />
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
