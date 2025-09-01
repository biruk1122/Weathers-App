import searchIcon from "../assets/search-icon.png"
import clearIcon from "../assets/clear-icon.png"
import cloudhIcon from "../assets/cloud-icon.png"
import drizzlehIcon from "../assets/drizzle-icon.png"
import humidityIcon from "../assets/humidity-icon.png"
import rainIcon from "../assets/rain-icon.png"
import snowhIcon from "../assets/snow-icon.png"
import windIcon from "../assets/wind-icon.png"

function Weather() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e2d4ff]">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-[linear-gradient(45deg,#2f4680,#500ae4)]">
        {/* Search Bar */}
        <div className="flex items-center gap-3 mb-8">
          <input
            className="flex-1 h-12 rounded-full pl-5 pr-4 text-gray-700 text-lg bg-[#ebfffc] outline-none placeholder:text-gray-400"
            type="text"
            placeholder="Search city..."
          />
          <img
            className="h-12 w-12 p-3 rounded-full bg-[#ebfffc] cursor-pointer hover:scale-105 transition"
            src={searchIcon}
            alt="Search Icon"
          />
        </div>

        {/* Weather Info */}
        <div className="flex flex-col items-center text-center mb-10">
          <img className="h-40 w-40 mb-6" src={clearIcon} alt="Weather Icon" />
          <p className="text-white text-7xl font-bold leading-none mb-2">
            18&#176;C
          </p>
          <p className="text-white text-3xl font-medium">London</p>
        </div>

        {/* Weather Details */}
        <div className="flex justify-between text-white">
          {/* Humidity */}
          <div className="flex items-center gap-3">
            <img className="h-10 w-10" src={humidityIcon} alt="Humidity" />
            <div>
              <p className="text-lg font-semibold">91%</p>
              <span className="text-sm text-gray-200">Humidity</span>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="flex items-center gap-3">
            <img className="h-10 w-10" src={windIcon} alt="Wind" />
            <div>
              <p className="text-lg font-semibold">4.5 km/h</p>
              <span className="text-sm text-gray-200">Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
