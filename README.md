# 🌦️ Weather App

A simple and responsive **Weather App** built with **React + Vite + TailwindCSS**.  
It fetches real-time weather data using the **OpenWeatherMap API** and provides city suggestions as you type.

---

## 🚀 Features

- 🔍 **Search by city** with instant suggestions (from a preloaded country & capital dataset).  
- 🌍 **Real-time weather data** (temperature, humidity, wind speed, location).  
- 🖼️ **Dynamic weather icons** based on conditions (clear, cloudy, rain, snow, drizzle).  
- 🎨 **Beautiful UI** with gradient backgrounds and responsive design.  
- ⚡ Built with **React, Vite, TailwindCSS** for fast development.

---

## 📸 Demo

<img src="src/assets/Screenshot_image.PNG" alt='Screenshot Image'>

---

## 🛠️ Tech Stack

- **React** (Frontend framework)  
- **Vite** (Build tool)  
- **TailwindCSS** (Styling)  
- **OpenWeatherMap API** (Weather data source)

---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
2. **Install dependencies**
```
npm install
```

3. **Set up environment variables**
Create a .env file in the root directory and add your OpenWeather API key:
```
VITE_WEATHER_API_ID=your_api_key_here
```

4. **Run the app**
```
npm run dev
```

5. **Open the app in your browser:**
```
http://localhost:5173
```
## 📂 Project Structure
- ├── public/
- │   ├── demo.png           # App screenshot (for README)
- │   └── icons.png          # Weather icons
- ├── src/
- │   ├── assets/            # Images & icons
- │   ├── components/
- │   │   ├── Weather.jsx    # Main Weather component
- │   │   └── Cities.json    # City & capital dataset
- │   ├── App.jsx
- │   ├── main.jsx
- │   └── index.css
- ├── .gitignore
- ├── package.json
- └── vite.config.js

## 🌐 API Reference

This project uses the OpenWeatherMap API:

- API Documentation

- Example request:
```
https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY
```
