// // src/Weather.js
// import React, { useState } from 'react';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const fetchWeather = async () => {
//     const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//     const data = await response.json();
//     setWeatherData(data);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
//       <h1 className="text-2xl font-bold mb-4">Weather App</h1>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city"
//         className="border p-2 w-full mb-4"
//       />
//       <button onClick={fetchWeather} className="bg-blue-500 text-white p-2 rounded w-full">
//         Get Weather
//       </button>
//       {weatherData && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold">{weatherData.name}</h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Condition: {weatherData.weather[0].description}</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;





// // src/Weather.js
// import { useState } from 'react';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const fetchWeather = async () => {
//     const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//     const data = await response.json();
//     setWeatherData(data);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
//       <h1 className="text-2xl font-bold mb-4">Weather App</h1>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city"
//         className="border p-2 w-full mb-4"
//       />
//       <button onClick={fetchWeather} className="bg-blue-500 text-white p-2 rounded w-full">
//         Get Weather
//       </button>
//       {weatherData && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold">{weatherData.name}</h2>
//           <div>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Condition: {weatherData.weather[0].description}</p>
//           </div>
//           <div>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//           </div>

//           {/* <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Condition: {weatherData.weather[0].description}</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;



// no dark mode


// import { useState } from 'react';
// // import sunnyImage from './assets/sunny.png';
// // import rainImage from './assets/rain.png';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

//   const fetchWeather = async () => {
//     const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`);
//     const data = await response.json();
//     setWeatherData(data);
//   };

//   const toggleUnit = () => {
//     setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
//   };

//   const getWeatherImage = (condition) => {
//     switch (condition) {
//       case 'Clear':
//         return '././public/sunny.png'; // Update path for sunny image
//       case 'Rain':
//         return '././public/rain.png'; // Update path for rainy image
//       // Add more cases for different weather conditions
//       default:
//         return '././public/sunny.png'; // Update path for default image
//     }
// };


//   return (
//     <div className='flex items-center justify-center h-screen w-screen bg-gray-100'>
//     <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
//       <h1 className="text-2xl font-bold mb-4">Mausam</h1>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city"
//         className="border p-2 w-full mb-4"
//       />
//       <button onClick={fetchWeather} className="bg-blue-500 text-white p-2 rounded w-full">
//         Get Weather
//       </button>
//       <button onClick={toggleUnit} className="bg-blue-500 text-white p-2 rounded w-full mt-2">
//          {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
//       </button>
//       {weatherData && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold">{weatherData.name}</h2>
//           <img src={getWeatherImage(weatherData.weather[0].main)} alt={weatherData.weather[0].description} className="w-20 h-20 mx-auto" />

          
//             <div>
//                   <h1 className='font-bold text-blue-800'>Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}</h1>
//             </div>
//             <div>
//                   <h1 className='font-bold text-blue-800 '>Condition: {weatherData.weather[0].description}</h1>
//             </div>

//             {/* <h1 className='font-bold text-blue-800'>Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}</h1>
//             <h1 className='font-bold text-blue-800 '>Condition: {weatherData.weather[0].description}</h1> */}

          
          
//             <div>
//                  <h1 className='font-bold text-blue-800'>Humidity: {weatherData.main.humidity}   %</h1>
//             </div>
//             <div>
//                  <h1 className='font-bold text-blue-800'>Wind Speed: {weatherData.wind.speed} mph</h1>
//             </div>
//             {/* <h1 className='font-bold text-blue-800'>Humidity: {weatherData.main.humidity}%</h1> */}
//             {/* <h1 className='font-bold text-blue-800'>Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</h1> */}
          
//           <h1 className='font-bold text-blue-800'>Date: {new Date().toLocaleDateString()}</h1>
//           <h1 className='font-bold text-blue-800'>Time: {new Date().toLocaleTimeString()}</h1>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Weather;





// celcius fahrenheit issues

// import { useState } from 'react';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
//   const [isDarkMode, setIsDarkMode] = useState(false); // Start with light mode

//   const fetchWeather = async () => {
//     const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`);
//     const data = await response.json();
//     setWeatherData(data);
//   };

//   const toggleUnit = () => {
//     setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
//     fetchWeather();
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const getWeatherImage = (condition) => {
//     switch (condition) {
//       case 'Clear':
//         return '././public/sunny.png';
//       case 'Rain':
//         return '././public/rain.png';
//       default:
//         return '././public/sunny.png';
//     }
//   };

//   return (
//     <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}>
//       <div className={`relative max-w-md mx-auto mt-10 p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg rounded-lg transition duration-300`}>
        
//   {/* dark mode */}
//         <button
//           onClick={toggleDarkMode}
//           className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 focus:outline-none"
//         >
//           {isDarkMode ? '☀︎' : '☀︎'}
//         </button>
        
//         <div className="flex justify-between items-center mb-4">
//           <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Weatheria</h1>
//         </div>

//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city"
//           className={`border p-2 rounded w-full mb-4 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         />

//         <button
//           onClick={fetchWeather}
//           className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full mb-2 transition duration-300"
//         >
//           Check Weather
//         </button>

//         <button
//           onClick={toggleUnit}
//           className="bg-green-500 hover:bg-green-600 text-white p-2 rounded w-full transition duration-300"
//         >
//           {unit === 'metric' ? 'Celsius' : 'Fahrenheit'}
//         </button>

//         {weatherData && (
//           <div className="mt-6 text-center">
//             <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{weatherData.name}</h2>
//             <img
//               src={getWeatherImage(weatherData.weather[0].main)}
//               alt={weatherData.weather[0].description}
//               className="w-24 h-24 mx-auto mb-4"
//             />

//             <div className="flex justify-around items-center mb-4 ml-2">
//               <div>
//                 <h1 className={`text-lg font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
//                   Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'F' : 'C'}
//                 </h1>
//               </div>
//               <div>
//                 <h1 className={`text-lg font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
//                   Condition: {weatherData.weather[0].description}
//                 </h1>
//               </div>
//             </div>

//             <div className="flex justify-around items-center mb-4 ml-2">
//               <div>
//                 <h1 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
//                   Humidity: {weatherData.main.humidity}%
//                 </h1>
//               </div>
//               <div>
//                 <h1 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
//                   Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
//                 </h1>
//               </div>
//             </div>

//             <h1 className={`text-md font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
//               Date: {new Date().toLocaleDateString()}
//             </h1>
//             <h1 className={`text-md font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
//               Time: {new Date().toLocaleTimeString()}
//             </h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Weather;






// corrected code 

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
                <h1 className={`text-lg font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}
                </h1>
              </div>
              <div>
                <h1 className={`text-lg font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  Condition: {weatherData.weather[0].description}
                </h1>
              </div>
            </div>

            <div className="flex justify-around items-center mb-4 ml-2">
              <div>
                <h1 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  Humidity: {weatherData.main.humidity}%
                </h1>
              </div>
              <div>
                <h1 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
                </h1>
              </div>
            </div>

            <h1 className={`text-md font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
              Date: {new Date().toLocaleDateString()}
            </h1>
            <h1 className={`text-md font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
              Time: {new Date().toLocaleTimeString()}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;




