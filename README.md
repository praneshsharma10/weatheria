# Weatheria

Weatheria is a simple, user-friendly weather application built with React, allowing users to check real-time weather information for cities worldwide. Users can toggle between Celsius and Fahrenheit, switch between light and dark modes, and enjoy a clean, responsive UI.

## Features

- **Search for any city** to get the latest weather details.
- **Temperature unit toggle**: Switch between Celsius and Fahrenheit with ease.
- **Dark mode toggle**: Choose between light and dark modes for a better viewing experience.
- **Real-time weather information** including temperature, weather condition, humidity, and wind speed.
  
## Demo

[Live Demo](#) - *Add link to live demo if available*

## Tech Stack

- **React**
- **Tailwind CSS** for styling
- **OpenWeatherMap API** for fetching weather data

## Prerequisites

- Node.js and npm installed on your local machine.
- A valid API key from [OpenWeatherMap](https://openweathermap.org/api).

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/weatheria.git
    cd weatheria
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Setup API key:**
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key to the `.env` file:
     ```bash
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the application:**
    ```bash
    npm run dev
    ```

5. **Build the application for production:**
    ```bash
    npm run build
    ```

## Usage

- **Enter City**: Type the name of a city in the search box and click "Check Weather" to fetch the latest data.
- **Temperature Unit Toggle**: Click the Celsius/Fahrenheit button to switch units.
- **Dark Mode Toggle**: Click the sun icon at the top-right corner to switch between light and dark modes.

## Snippet

Here's a quick look at the `fetchWeather` function used in the app to retrieve weather data:

```javascript
const fetchWeather = async (unitParam = unit) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitParam}`);
  const data = await response.json();
  setWeatherData(data);
};
```

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Contributions, feature requests, and feedback are welcome!

---

> *Enjoy using Weatheria? Give it a star ⭐ on GitHub!* 

--- 

Feel free to add any additional details as needed!
