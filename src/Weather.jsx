import { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const fetchWeather = async (unitParam = unit) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitParam}`);
    const data = await response.json();
    setWeatherData(data);
  };

  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    fetchWeather(newUnit); // Pass the new unit directly to fetchWeather
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getWeatherImage = (condition) => {
    switch (condition) {
      case 'Clear':
        return '././public/sunny.png';
      case 'Rain':
        return '././public/rain.png';
      default:
        return '././public/sunny.png';
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}>
      <div className={`relative max-w-md mx-auto mt-10 p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg rounded-lg transition duration-300`}>
        
        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 focus:outline-none"
        >
          {isDarkMode ? '☀︎' : '☀︎'}
        </button>
        
        <div className="flex justify-between items-center mb-4">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Weatheria</h1>
        </div>

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className={`border p-2 rounded w-full mb-4 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />

        <button
          onClick={() => fetchWeather(unit)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full mb-2 transition duration-300"
        >
          Check Weather
        </button>

        <button
          onClick={toggleUnit}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full transition duration-300"
        >
          {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
        </button>

        {weatherData && (
          <div className="mt-6 text-center">
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{weatherData.name}</h2>
            <img
              src={getWeatherImage(weatherData.weather[0].main)}
              alt={weatherData.weather[0].description}
              className="w-24 h-24 mx-auto mb-4"
            />

            <div className="flex justify-around items-center mb-4 ml-2">
              <div>
                <h1 className={`text-lg font-semibold ${isDarkMode ? 'text-blue-400' : 'text-black'}`}>
                  Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}
                </h1>
              </div>
              <div>
                <h1 className={`text-lg font-semibold ${isDarkMode ? 'text-blue-400' : 'text-black'}`}>
                  Condition: {weatherData.weather[0].description}
                </h1>
              </div>
            </div>

            <div className="flex justify-around items-center mb-4 ml-2">
              <div>
                <h1 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-black'}`}>
                  Humidity: {weatherData.main.humidity}%
                </h1>
              </div>
              <div>
                <h1 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-black'}`}>
                  Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
                </h1>
              </div>
            </div>

            <h1 className={`text-md font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-black'}`}>
              Date: {new Date().toLocaleDateString()}
            </h1>
            <h1 className={`text-md font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-black'}`}>
              Time: {new Date().toLocaleTimeString()}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;




