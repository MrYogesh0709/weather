import { useEffect, useState } from "react";
import Loading from "./Loading";
import { IconClouds } from "./weatherIcon";

const API_KEY = import.meta.env.VITE_API_KEY;
const APP_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ForeCast = ({ cityName }: { cityName: string }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [forecastData, setForecastData] = useState<Record<
    string,
    Forecast[]
  > | null>(null);

  interface Forecast {
    dt_txt: string;
    main: { temp: string };
    weather: { description: string; icon: string; id: number; main: string }[];
  }
  const groupForecastsByDate = (forecasts: Forecast[]) => {
    const grouped = forecasts.reduce((acc, forecast) => {
      const date = forecast.dt_txt.split(" ")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(forecast);
      return acc;
    }, {} as Record<string, Forecast[]>);
    return grouped;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(
        `${APP_URL}&lat=${latitude}&lon=${longitude}&q=${cityName}&units=metric`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Weather data not available!");
          }
          return response.json();
        })
        .then((data) => {
          const groupedForecasts = groupForecastsByDate(data.list);
          setForecastData(groupedForecasts);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-center py-10">Error: {error}</div>;
  }
  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-slate-300 font-mono">
        Weather Forecast {"=>"}
      </h2>
      <div className="h-1 dark:bg-slate-800 bg-slate-800 w-64  mb-2"></div>
      {forecastData ? (
        Object.keys(forecastData).map((date) => (
          <section key={date} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{date}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {forecastData[date].map((forecast, index) => {
                const id = forecast.weather[0].id.toString();
                const icon = forecast.weather[0].icon;
                return (
                  <div
                    key={index}
                    className="p-4 border border-slate-400 rounded-lg bg-slate-700 shadow-lg bg:slate-300 min-w-fit"
                  >
                    <p className="text-slate-200">
                      Time: {forecast.dt_txt.split(" ")[1]}
                    </p>
                    <div className="flex items-center gap-2 text-slate-200">
                      Temperature: {forecast.main.temp}°C{" "}
                      <div>{IconClouds[id] || IconClouds[icon]}</div>
                    </div>
                    <p className="text-slate-200">
                      Description: {forecast.weather[0].description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        ))
      ) : (
        <section className="text-2xl text-center mt-16 text-slate-300">
          Sorry couldn't find data{" "}
        </section>
      )}
    </section>
  );
};

export default ForeCast;
