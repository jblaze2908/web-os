import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./style.scss";
const AppId = "e0d5af205f1394ba6173ecf9751d7bdd";
const SunShower = () => (
  <div className="icon sun-shower">
    <div className="cloud"></div>
    <div className="sun">
      <div className="rays"></div>
    </div>
    <div className="rain"></div>
  </div>
);
const ThunderStorm = () => (
  <div className="icon thunder-storm">
    <div className="cloud"></div>
    <div className="lightning">
      <div className="bolt"></div>
      <div className="bolt"></div>
    </div>
  </div>
);
const Cloudy = () => (
  <div className="icon cloudy">
    <div className="cloud"></div>
    <div className="cloud"></div>
  </div>
);
const Sunny = () => (
  <div className="icon sunny">
    <div className="sun">
      <div className="rays"></div>
    </div>
  </div>
);
const Rainy = () => (
  <div className="icon rainy">
    <div className="cloud"></div>
    <div className="rain"></div>
  </div>
);
const Snowy = () => (
  <div className="icon flurries">
    <div className="cloud"></div>
    <div className="snow">
      <div className="flake"></div>
      <div className="flake"></div>
    </div>
  </div>
);
export default function WeatherWidget() {
  const [pos, setPos] = useState({ latitude: null, longitude: null });
  const [weather, setWeather] = useState({});
  const getCoordinates = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      let crd = pos.coords;
      getWeather({ latitude: crd.latitude, longitude: crd.longitude });
    }

    function error(err) {
      getWeather({ latitude: 28.7041, longitude: 77.1025 });
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  const getWeather = (position) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${AppId}&units=metric`;
    Axios.get(url).then((res) => {
      setWeather(res.data);
    });
  };
  useEffect(() => {
    getCoordinates();

    return () => {};
  }, []);
  let WeatherIcon;
  if (weather.weather) {
    console.log(weather);
    if (weather.weather[0].main === "Rain") WeatherIcon = Rainy;
    else if (weather.weather[0].main === "Thunderstorm")
      WeatherIcon = ThunderStorm;
    else if (weather.weather[0].main === "Drizzle") WeatherIcon = Rainy;
    else if (weather.weather[0].main === "Snow") WeatherIcon = Snowy;
    else if (weather.weather[0].main === "Clear") WeatherIcon = Sunny;
    else if (weather.weather[0].main === "Clouds") WeatherIcon = Cloudy;
  }
  return <div>{WeatherIcon && <WeatherIcon />}</div>;
}
