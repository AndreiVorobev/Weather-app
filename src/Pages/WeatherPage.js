import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function WeatherPage() {
  // let navigate = useNavigate();
  // useEffect(() => {
  //   let authToken = sessionStorage.getItem("Auth Token");

  //   // if (authToken) {
  //   //   navigate("/");
  //   // }

  //   if (!authToken) {
  //     navigate("/loginpage");
  //   }
  // }, [navigate]);
  return (
    <div>
      <h1>Weather page is here</h1>
      <Link to="/profilepage">aaa</Link>
    </div>
  );
}
