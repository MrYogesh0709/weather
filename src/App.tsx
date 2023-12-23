import { useState, useEffect } from "react";
import { ArrowIcon } from "./Icons";
import Loading from "./Loading";
import ForeCast from "./ForeCast";
import { IconClouds } from "./weatherIcon";
interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    id: string;
    description: string;
    icon: string;
  }[];
  wind: { speed: number; deg: number };
}
import { LuGithub } from "react-icons/lu";
const API_KEY = import.meta.env.VITE_API_KEY;
const APP_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cityName, setCityName] = useState("");

  const weatherAPI = `${APP_URL}&q=${cityName}&units=metric`;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(`${weatherAPI}&lat=${latitude}&lon=${longitude}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Weather data not available!");
          }
          return response.json();
        })
        .then((data) => {
          setWeatherData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    });
  }, []);

  const searchWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(weatherAPI)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather data not available!");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-center py-10">Error: {error}</div>;
  }

  if (!weatherData) {
    return <div className="text-center py-10">No weather data available.</div>;
  }

  return (
    <main className="max-w-2xl mx-auto min-h-screen">
      <header className="text-center pt-2 dark:text-slate-200">
        <h1 className="text-4xl font-bold mb-4">Weather today</h1>
        <div className="h-1 dark:bg-slate-800 bg-slate-800 w-32 mx-auto mb-2"></div>
      </header>
      <form onSubmit={searchWeather} className="flex items-center gap-2 px-4">
        <label htmlFor="cityInput" className="sr-only">
          Enter city name
        </label>
        <input
          type="search"
          id="cityInput"
          aria-label="Enter city name"
          className="w-full mb-2 outline-none p-1 font-mono rounded-lg dark:bg-slate-300"
          placeholder="e.g.:ahmedabad"
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          type="submit"
          className="dark:bg-slate-700 text-slate-200 rounded-md p-1 mb-2 hover:bg-slate-800 hover:text-slate-100"
        >
          <ArrowIcon />
        </button>
      </form>

      <section className="flex items-center flex-col justify-center">
        <div className="bg-slate-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Location: {weatherData?.name}
          </h2>
          <div className="text-lg flex items-center gap-2">
            Temperature: {weatherData?.main.temp}°C
            {IconClouds[weatherData.weather[0].id] ||
              IconClouds[weatherData.weather[0].icon]}
          </div>
          <div className="text-lg uppercase flex justify-between">
            Description: <p>{weatherData?.weather[0].description}</p>
          </div>
          <div className="flex justify-between">
            Wind Speed: <p>{weatherData.wind.speed}</p>
          </div>
          <div className="flex justify-between">
            Wind deg: <p> {weatherData.wind.deg} °</p>
          </div>
        </div>
      </section>
      <ForeCast cityName={cityName} />
      <a
        href="https://github.com/MrYogesh0709/weather"
        target="_blank"
        rel="noreferrer"
        className="text-slate-200 fixed bottom-14 right-14 hover:text-slate-300"
      >
        <LuGithub size={30} />
      </a>
    </main>
  );
};

export default App;
