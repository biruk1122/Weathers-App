import searchIcon from "../assets/search-icon.png"
import clearIcon from "../assets/clear-icon.png"
import cloudIcon from "../assets/cloud-icon.png"
import drizzlehIcon from "../assets/drizzle-icon.png"
import humidityIcon from "../assets/humidity-icon.png"
import rainIcon from "../assets/rain-icon.png"
import snowhIcon from "../assets/snow-icon.png"
import windIcon from "../assets/wind-icon.png"
import cities from "../components/Cities.json"
import { useEffect, useRef, useState } from "react"

function Weather() {
  const [weatherData, setWeatherData] = useState({})
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const allIcons = {
    //Clear sky
    "01d": clearIcon,
    "01n": clearIcon,
    //Few clouds
    "02d": cloudIcon,
    "02n": cloudIcon,
    //Scattered clouds
    "03d": cloudIcon,
    "03n": cloudIcon,
    //Shower rain
    "04d": drizzlehIcon,
    "04n": drizzlehIcon,
    //Rain
    "09d": rainIcon,
    "09n": rainIcon,
    //Thunderstorem
    "10d": rainIcon,
    "10n": rainIcon,
    //snow
    "13d": snowhIcon,
    "13n": snowhIcon,
  }

  const search = async (city) => {
    if (city === "") {
      alert("First Enter Country Cities")
      return
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_WEATHER_API_ID
      }`

      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok) {
        alert(data.message)
        return
      }

      console.log(data)
      const icon = allIcons[data.weather[0].icon] || clearIcon
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temprature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      })
    } catch (error) {
      setWeatherData(false)
      console.error("Error in Fetching weather Data")
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)

    if (value.length > 0) {
      const filtered = cities.filter((city) =>
        city.capital.toLowerCase().startsWith(value.toLowerCase())
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const handleSelect = (cityName) => {
    setQuery(cityName)
    setSuggestions([])
    search(cityName)
  }

  useEffect(() => {
    search("estanbul")
  }, [])

  return (
    <div className="h-screen flex items-center justify-center bg-[#e2d4ff]">
      <div className="w-full max-w-md h-full p-16 rounded-2xl shadow-lg bg-[linear-gradient(45deg,#2f4680,#500ae4)]">
        {/* Search Bar */}
        <div className="flex items-center gap-3 mb-8">
          <input
            className="flex-1 h-12 rounded-full pl-5 pr-4 text-gray-700 text-lg bg-[#ebfffc] outline-none placeholder:text-gray-400"
            // ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search city..."
          />
          <img
            className="h-12 w-12 p-3 rounded-full bg-[#ebfffc] cursor-pointer hover:scale-105 transition"
            src={searchIcon}
            alt="Search Icon"
            onClick={() => search(query)}
          />
        </div>
        {/*Suggestions dropdown */}

        {suggestions.length > 0 && (
          <ul className="w-full max-h-48 overflow-y-auto bg-white shadow-lg rounded-lg mt-2">
            {suggestions.map((city, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(city.capital)}
              >
                {city.capital}-{city.country}
              </li>
            ))}
          </ul>
        )}

        {weatherData ? (
          <>
            {/* Weather Info */}
            <div className="flex flex-col items-center text-center mb-10">
              <img
                className="h-40 w-40 mb-6"
                src={weatherData.icon}
                alt="Weather Icon"
              />
              <p className="text-white text-7xl font-bold leading-none mb-2">
                {weatherData.temprature}&#176;C
              </p>
              <p className="text-white text-3xl font-medium">
                {weatherData.location}
              </p>
            </div>

            {/* Weather Details */}
            <div className="flex justify-between text-white">
              {/* Humidity */}
              <div className="flex items-center gap-3">
                <img className="h-10 w-10" src={humidityIcon} alt="Humidity" />
                <div>
                  <p className="text-lg font-semibold">
                    {weatherData.humidity}%
                  </p>
                  <span className="text-sm text-gray-200">Humidity</span>
                </div>
              </div>

              {/* Wind Speed */}
              <div className="flex items-center gap-3">
                <img className="h-10 w-10" src={windIcon} alt="Wind" />
                <div>
                  <p className="text-lg font-semibold">
                    {weatherData.windspeed} km/h
                  </p>
                  <span className="text-sm text-gray-200">Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Weather
