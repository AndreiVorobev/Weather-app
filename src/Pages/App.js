import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
import WeatherPage from "./WeatherPage";
import PrivateRoute from "./PrivateRoute";

//GET WEATHER
// const API_KEY = "b49525870afe1ead9c41b43350b56cce";
// getWeather = async () => {
//   const API_URL = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`
//   );

//   const data = await API_URL.json();
//   console.log(data);
// };

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <WeatherPage />
          </PrivateRoute>
        }></Route>
      <Route
        path="/profilepage"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }></Route>
      <Route path="/loginpage" element={<LoginPage />}></Route>
      <Route path="/authpage" element={<AuthPage />}></Route>
    </Routes>
  );
}
export default App;
