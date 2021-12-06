<<<<<<< HEAD
import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./AuthPage";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
import WeatherPage from "./WeatherPage";
=======
import React from 'react';
import AuthPage from './AuthPage';
import Router from './Router';
import { AuthProvider } from './contexts/AuthContext';
import ProfilePage from './ProfilePage';
import WeatherPage from './WeatherPage';
>>>>>>> cdae5a72bcdf86f3dd76bc88ff377036157215ed

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
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/authpage" component={AuthPage}></Route>
        <Route path="/profilepage" component={ProfilePage}></Route>
        <Route path="/weatherpage" component={WeatherPage}></Route>
      </Switch>
=======
      <Router>
        <AuthProvider>
          <WeatherPage />
          <ProfilePage />
          <AuthPage />
        </AuthProvider>
      </Router>
>>>>>>> cdae5a72bcdf86f3dd76bc88ff377036157215ed
    );
  }
}

export default App;
