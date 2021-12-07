import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WeatherPage() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/profilepage");
    }

    if (!authToken) {
      navigate("/loginpage");
    }
  }, []);
  return <div>profilepage is here </div>;
}
