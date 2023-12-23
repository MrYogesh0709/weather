import {
  WiDaySunny,
  WiRain,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiSmoke,
  WiTornado,
  WiDayHaze,
  WiSnowflakeCold,
  WiSnowWind,
  WiDust,
  WiCloud,
  WiCloudy,
  WiSandstorm,
  WiVolcano,
  WiDayWindy,
  WiSleet,
  WiRainMix,
  WiDayRainMix,
  WiRainWind,
  WiRaindrop,
  WiDayShowers,
  WiStormShowers,
  WiDayStormShowers,
} from "react-icons/wi";

export type IconCloudsType = {
  [key: string]: JSX.Element;
};

export const IconClouds: IconCloudsType = {
  // clear
  "01d": <WiDaySunny size={40} color="orange" />,
  "01n": <WiNightClear size={40} color="lightcyan" />,
  // cloud
  "02d": <WiDayCloudy size={40} color="#92b5f3" />, // Scattered clouds during the day
  "02n": <WiNightAltCloudy size={40} color="#92b5f3" />, // Scattered clouds at night
  "03d": <WiCloud size={40} color="#white" />, // Broken clouds during the day
  "03n": <WiCloud size={40} color="#white" />, // Broken clouds at night
  "04d": <WiCloudy size={40} color="white" />, // Overcast clouds during the day
  "04n": <WiCloudy size={40} color="white" />, // Overcast clouds at night
  // atmosphere
  "701": <WiFog size={40} color="white" />, // Mist
  "711": <WiSmoke size={40} color="#606060" />, // Smoke
  "721": <WiDayHaze size={40} color="#white" />, // Haze
  "731": <WiSandstorm size={40} color="#ffcc00" />, // Sand/Dust whirls
  "741": <WiFog size={40} color="white" />, // Fog
  "751": <WiSandstorm size={40} color="#ffcc00" />, // Sand
  "761": <WiDust size={40} color="white" />, // Dust
  "762": <WiVolcano size={40} color="white" />, // Volcanic ash
  "771": <WiDayWindy size={40} color="white" />, // Squalls
  "781": <WiTornado size={40} color="#1a1aff" />, // Tornado
  // snow
  "600": <WiSnowflakeCold size={40} color="#a8d0e6" />, // Light snow
  "601": <WiSnow size={40} color="#d3e5fc" />, // Snow
  "602": <WiSnowflakeCold size={40} color="#c0d6f5" />, // Heavy snow
  "611": <WiSleet size={40} color="#9fc3f2" />, // Sleet
  "612": <WiSleet size={40} color="#9fc3f2" />, // Light shower sleet
  "613": <WiSleet size={40} color="#9fc3f2" />, // Shower sleet
  "615": <WiSnowWind size={40} color="#b0c9e3" />, // Light rain and snow
  "616": <WiRainMix size={40} color="#b0c9e3" />, // Rain and snow
  "620": <WiSnowWind size={40} color="#b0c9e3" />, // Light shower snow
  "621": <WiSnowWind size={40} color="#b0c9e3" />, // Shower snow
  "622": <WiSnowWind size={40} color="#b0c9e3" />,
  // rain
  "500": <WiDayRainMix size={40} color="#6baed6" />, // Light rain
  "501": <WiRain size={40} color="#9ecae1" />, // Moderate rain
  "502": <WiRainWind size={40} color="#c6dbef" />, // Heavy intensity rain
  "503": <WiRaindrop size={40} color="#2171b5" />, // Very heavy rain
  "504": <WiDayShowers size={40} color="#08519c" />, // Extreme rain
  "511": <WiRaindrop size={40} color="#253494" />, // Freezing rain
  "520": <WiRain size={40} color="#6baed6" />, // Light intensity shower rain
  "521": <WiRain size={40} color="#9ecae1" />, // Shower rain
  "522": <WiRainWind size={40} color="#c6dbef" />, // Heavy intensity shower rain
  "531": <WiRaindrop size={40} color="#2171b5" />, // Ragged shower rain
  // drizzle
  "300": <WiDayShowers size={40} color="#6baed6" />, // Light intensity drizzle
  "301": <WiRainMix size={40} color="#9ecae1" />, // Drizzle
  "302": <WiRain size={40} color="#c6dbef" />, // Heavy intensity drizzle
  "310": <WiDayShowers size={40} color="#2171b5" />, // Light intensity drizzle rain
  "311": <WiRain size={40} color="#08519c" />, // Drizzle rain
  "312": <WiRainWind size={40} color="#253494" />, // Heavy intensity drizzle rain
  "313": <WiDayShowers size={40} color="#6baed6" />, // Shower rain and drizzle
  "314": <WiRain size={40} color="#9ecae1" />, // Heavy shower rain and drizzle
  "321": <WiRainMix size={40} color="#c6dbef" />,
  // thunderstorm
  "200": <WiThunderstorm size={40} color="#6baed6" />, // Thunderstorm with light rain
  "201": <WiStormShowers size={40} color="#9ecae1" />, // Thunderstorm with rain
  "202": <WiRainWind size={40} color="#c6dbef" />, // Thunderstorm with heavy rain
  "210": <WiDayStormShowers size={40} color="#2171b5" />, // Light thunderstorm
  "211": <WiThunderstorm size={40} color="#08519c" />, // Thunderstorm
  "212": <WiStormShowers size={40} color="#253494" />, // Heavy thunderstorm
  "221": <WiRainWind size={40} color="#6baed6" />, // Ragged thunderstorm
  "230": <WiThunderstorm size={40} color="#9ecae1" />, // Thunderstorm with light drizzle
  "231": <WiStormShowers size={40} color="#c6dbef" />, // Thunderstorm with drizzle
  "232": <WiRainWind size={40} color="#2171b5" />, // Thunderstorm with heavy drizzle
};
